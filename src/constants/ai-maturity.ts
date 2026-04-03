import type { AIMaturityLevel } from '@/types/ai-maturity';

export const AI_MATURITY_LEVELS: AIMaturityLevel[] = [
  {
    description: {
      en: 'Manual everything. Google, Stack Overflow, copy-paste.',
      uk: 'Все вручну. Google, Stack Overflow, копіпаст.'
    },
    icon: 'block',
    level: 0,
    multiplier: '1x',
    title: { en: 'No AI', uk: 'Без AI' }
  },
  {
    description: {
      en: 'ChatGPT in a separate tab. Copy code back and forth.',
      uk: 'ChatGPT у окремій вкладці. Копіпаст туди-сюди.'
    },
    icon: 'chat',
    level: 1,
    multiplier: '~1.3x',
    socialMarker: { en: 'Most teams are here', uk: 'Більшість команд тут' },
    title: { en: 'AI Chat', uk: 'AI в чаті' }
  },
  {
    description: {
      en: 'Copilot or Cursor. AI sees your code, autocompletes.',
      uk: 'Copilot або Cursor. AI бачить код, автодоповнення.'
    },
    icon: 'code',
    level: 2,
    multiplier: '~2x',
    socialMarker: { en: 'Early adopters', uk: 'Ранні адоптери' },
    title: { en: 'AI in IDE', uk: 'AI в IDE' }
  },
  {
    description: {
      en: 'CLI agent runs commands in your codebase on your behalf.',
      uk: 'CLI-агент виконує команди у вашій кодовій базі.'
    },
    icon: 'terminal',
    level: 3,
    multiplier: '~2.5x',
    title: { en: 'AI Agent', uk: 'AI Агент' }
  },
  {
    description: {
      en: 'Custom slash commands, rules files, and skill contexts.',
      uk: 'Власні команди, файли правил та контексти навичок.'
    },
    icon: 'tune',
    level: 4,
    multiplier: '~3.5x',
    title: { en: 'Prepared Flows', uk: 'Підготовлені флоу' }
  },
  {
    description: {
      en: 'Parallel agents, AI code review, specialized sub-agents.',
      uk: 'Паралельні агенти, AI code review, спеціалізовані агенти.'
    },
    icon: 'groups',
    level: 5,
    multiplier: '~5x',
    title: { en: 'Multi-Agent', uk: 'Мультиагентність' }
  },
  {
    description: {
      en: 'Full single-task lifecycle: spec → code → test → PR.',
      uk: 'Повний цикл однієї задачі: spec → code → test → PR.'
    },
    icon: 'autorenew',
    level: 6,
    multiplier: '~7x',
    title: { en: 'Task Automation', uk: 'Автоматизація задачі' }
  },
  {
    description: {
      en: 'Autonomous task pipeline. Night shift. Human-in-the-loop.',
      uk: 'Автономний конвеєр задач. Нічна зміна. Людина у петлі.'
    },
    icon: 'rocket_launch',
    level: 7,
    multiplier: '~10x',
    socialMarker: { en: 'TeamX10 level', uk: 'Рівень TeamX10' },
    title: { en: 'Pipeline', uk: 'Конвеєр задач' }
  }
];
