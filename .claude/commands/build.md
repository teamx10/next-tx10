---
description: Run build, lint, and type-check to verify project health
allowed-tools: Bash(npm run:*), Bash(npx tsc:*)
---

Run all verification commands and report results:

1. Type check: !`npx tsc --noEmit`
2. Lint: !`npm run lint`
3. Build: !`npm run build`

Report only errors and warnings. If all pass, confirm project health.
