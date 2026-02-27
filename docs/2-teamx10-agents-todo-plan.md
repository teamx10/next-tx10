# TeamX10 Crypto Agents – Step-by-Step TODO Plan

## Concept (translated to English)

My technological strategic plan is to create many independent agents that work autonomously, each doing a small, independent task. They will evaluate each other’s work and trigger actions in other agents. A reactive architecture: some agents run on timers (fetch data from the internet – social networks, websites, exchanges – and store it in the database), other agents react to new data, validate its completeness, trigger analyzers, save analysis results, and publish to the website and Telegram channels.

---

## Phase 1 – Minimal Vertical Slice (MVP)

**Goal:** Get basic automated signals flowing from exchange → analysis → Telegram.

1. **Set up infrastructure**
   - [ ] Create Firebase project (DB + Functions).
   - [ ] Create Telegram bot and free/VIP channels.
   - [ ] Set up n8n (on Raspberry Pi or VPS).

2. **PriceFetcherAgent**
   - [ ] Create n8n workflow with cron trigger (every 1–5 minutes).
   - [ ] Fetch prices/OHLC for 3–5 coins from an exchange API.
   - [ ] Save data to `prices` collection in Firebase.
   - [ ] Emit an event/flag `market_data_updated` (e.g. create a doc in `events`).

3. **MarketSnapshotAgent**
   - [ ] Trigger on `market_data_updated` (new doc in `events` or scheduled).
   - [ ] Read latest prices for each coin.
   - [ ] Compute % changes (1h/4h/24h, volume flags).
   - [ ] Save snapshot to `market_snapshots`.
   - [ ] Emit `market_snapshot_ready`.

4. **SimpleRuleSignalAgent**
   - [ ] Trigger on `market_snapshot_ready`.
   - [ ] Apply simple rules (e.g. +3% in 1h + volume spike → long idea).
   - [ ] Build a raw JSON signal object.
   - [ ] Save to `raw_signals` collection.
   - [ ] Emit `raw_signal_created`.

5. **SignalLLMStylerAgent**
   - [ ] Trigger on `raw_signal_created`.
   - [ ] Call LLM (OpenAI) to convert JSON into short emoji-rich text.
   - [ ] Save formatted signal to `signals` collection with status `ready_for_publish`.
   - [ ] Emit `signal_ready`.

6. **TelegramPublisherAgent**
   - [ ] Trigger on `signal_ready` (or poll `signals` with this status).
   - [ ] Publish full signal text to VIP channel.
   - [ ] Optionally publish delayed/short version to the free channel.
   - [ ] Update signal status to `published` and log into `publish_log`.

7. **PipelineHealthAgent**
   - [ ] Cron workflow (every 5–10 minutes).
   - [ ] Check last run times for agents (PriceFetcher, Snapshot, Publisher).
   - [ ] If something stuck or missing, send alert to your personal Telegram.

---

## Phase 2 – Smarter Signals (Data + Analysis)

**Goal:** Make signals more intelligent using news and patterns.

8. **NewsFetcherAgent**
   - [ ] Cron workflow to fetch crypto news (RSS/API).
   - [ ] Save raw articles/headlines to `news_items`.

9. **NewsSentimentAgent**
   - [ ] Trigger on new `news_items`.
   - [ ] Use LLM or sentiment API to detect sentiment and map to coins.
   - [ ] Save processed insights into `news_insights`.

10. **PatternDetectorAgent**
    - [ ] Trigger on `market_snapshot_ready`.
    - [ ] Detect basic TA patterns (MA cross, breakouts, oversold/overbought).
    - [ ] Save pattern events to `pattern_events`.

11. **SignalComposerAgent (v2)**
    - [ ] Combine rules + patterns + news sentiment.
    - [ ] Upgrade logic of `SimpleRuleSignalAgent` or create a new one.
    - [ ] Generate richer raw signals with confidence scores and reasons.

12. **SignalLLMStylerAgent (v2)**
    - [ ] Adjust prompt to include news/pattern reasoning in 1–2 short sentences.
    - [ ] Keep messages compact and beginner-friendly.

---

## Phase 3 – Productization (Users, Plans, Stats)

**Goal:** Turn the pipeline into a real product with subscriptions and visible performance.

13. **SubscriptionSyncAgent**
    - [ ] Integrate Stripe subscriptions on the website.
    - [ ] On payment Webhook, write subscription doc in Firebase.
    - [ ] In n8n, add/remove users from VIP Telegram channels based on subscription status.

14. **FreeChannelDeriverAgent**
    - [ ] Trigger on new VIP `signals`.
    - [ ] Generate shortened/delayed versions for the free channel.
    - [ ] Publish to free channel on a schedule (e.g. 1–3 hours later).

15. **WebFeedPublisherAgent**
    - [ ] Trigger on `signal_published` or check collection periodically.
    - [ ] Sync latest signals and performance to Firestore collections used by Next.js.
    - [ ] Expose a public/read-optimized feed for the website.

16. **StatsAggregatorAgent**
    - [ ] Daily/weekly cron.
    - [ ] Compute stats: win rate, average R/R, best/worst trades.
    - [ ] Save to `stats` collection.
    - [ ] Optionally generate a short summary post for VIP/free channels.

---

## Suggested Implementation Order

1. Phase 1 agents (1–7) – **get a full automated vertical slice** from data to Telegram.
2. Phase 2 agents (8–12) – **improve intelligence and quality** of signals.
3. Phase 3 agents (13–16) – **turn into a commercial product** with subscriptions, free/vip split, and visible performance.

Start small, ship quickly, and refine each agent iteratively as data and feedback accumulate.
