import type { Service } from '@/types/service';

export const SERVICES: Service[] = [
  {
    deliverable: {
      en: 'AI Readiness Report',
      uk: 'Звіт про готовність до AI'
    },
    description: {
      en: 'We assess your team, tools, and workflows to identify the highest-leverage AI opportunities and blockers.',
      uk: 'Ми оцінюємо вашу команду, інструменти та процеси, щоб визначити найбільш перспективні можливості для AI та блокери.'
    },
    features: [
      {
        description: {
          en: 'Map all workflows and identify repetitive, rule-based tasks suitable for automation',
          uk: 'Картографуємо всі процеси та визначаємо повторювані, засновані на правилах завдання для автоматизації'
        },
        icon: 'search',
        title: { en: 'Workflow Audit', uk: 'Аудит процесів' }
      },
      {
        description: {
          en: 'Evaluate team AI literacy and identify skill gaps for targeted training',
          uk: 'Оцінюємо AI-грамотність команди та визначаємо прогалини у навичках для цільового навчання'
        },
        icon: 'people',
        title: { en: 'Team Assessment', uk: 'Оцінка команди' }
      },
      {
        description: {
          en: 'Prioritized list of AI interventions with estimated ROI and effort',
          uk: 'Пріоритизований список AI-втручань з оціненим ROI та зусиллями'
        },
        icon: 'list',
        title: { en: 'Opportunity Matrix', uk: 'Матриця можливостей' }
      }
    ],
    icon: 'search',
    phase: 1,
    slug: 'ai-audit',
    title: { en: 'AI Audit', uk: 'AI Аудит' }
  },
  {
    deliverable: {
      en: 'Trained Team + Playbook',
      uk: 'Навчена команда + Плейбук'
    },
    description: {
      en: 'Hands-on training that turns your team into confident AI users who can apply tools to real daily work.',
      uk: 'Практичне навчання, яке перетворює вашу команду на впевнених користувачів AI, здатних застосовувати інструменти в реальній щоденній роботі.'
    },
    features: [
      {
        description: {
          en: 'Practical workshops tailored to your team roles and actual workflows',
          uk: 'Практичні воркшопи, адаптовані до ролей вашої команди та реальних процесів'
        },
        icon: 'school',
        title: { en: 'Role-Based Training', uk: 'Навчання за ролями' }
      },
      {
        description: {
          en: 'Custom prompt libraries and best practices for your specific use cases',
          uk: 'Бібліотеки промптів та найкращі практики для ваших конкретних кейсів'
        },
        icon: 'book',
        title: { en: 'Prompt Engineering', uk: 'Інжиніринг промптів' }
      },
      {
        description: {
          en: 'Team playbook with repeatable AI workflows your team can follow independently',
          uk: 'Плейбук команди з повторюваними AI-воркфлоу, яким команда може слідувати самостійно'
        },
        icon: 'description',
        title: { en: 'AI Playbook', uk: 'AI Плейбук' }
      }
    ],
    icon: 'school',
    phase: 2,
    slug: 'ai-basics',
    title: { en: 'AI Basics', uk: 'AI Основи' }
  },
  {
    deliverable: {
      en: 'Working Multi-Agent System',
      uk: 'Працюючий мультиагентний систем'
    },
    description: {
      en: 'We design and deploy multi-agent systems where specialized AI agents collaborate to complete complex tasks autonomously.',
      uk: 'Ми проектуємо та розгортаємо мультиагентні системи, де спеціалізовані AI-агенти співпрацюють для виконання складних завдань автономно.'
    },
    features: [
      {
        description: {
          en: 'Define agent roles, responsibilities, and communication protocols',
          uk: "Визначаємо ролі агентів, обов'язки та протоколи комунікації"
        },
        icon: 'account_tree',
        title: { en: 'Agent Architecture', uk: 'Архітектура агентів' }
      },
      {
        description: {
          en: 'Build orchestration layer that coordinates agents and manages task delegation',
          uk: 'Будуємо шар оркестрації, який координує агентів та керує делегуванням завдань'
        },
        icon: 'hub',
        title: { en: 'Orchestration Layer', uk: 'Шар оркестрації' }
      },
      {
        description: {
          en: 'Integrate agents with your existing tools, APIs, and data sources',
          uk: 'Інтегруємо агентів з вашими існуючими інструментами, API та джерелами даних'
        },
        icon: 'integration_instructions',
        title: { en: 'Tool Integration', uk: 'Інтеграція інструментів' }
      }
    ],
    icon: 'hub',
    phase: 3,
    slug: 'orchestration',
    title: { en: 'Agent Orchestration', uk: 'Оркестрація агентів' }
  },
  {
    deliverable: {
      en: 'Automated Workflows in Production',
      uk: 'Автоматизовані воркфлоу у продакшні'
    },
    description: {
      en: 'We replace manual, repetitive processes with intelligent automation pipelines that run reliably at scale.',
      uk: 'Ми замінюємо ручні, повторювані процеси інтелектуальними конвеєрами автоматизації, які надійно працюють у масштабі.'
    },
    features: [
      {
        description: {
          en: 'Identify and prioritize processes with highest automation ROI',
          uk: 'Визначаємо та пріоритизуємо процеси з найвищим ROI автоматизації'
        },
        icon: 'analytics',
        title: { en: 'Process Mapping', uk: 'Картографування процесів' }
      },
      {
        description: {
          en: 'Build and deploy production-grade automation pipelines with monitoring',
          uk: 'Будуємо та розгортаємо автоматизаційні конвеєри production-рівня з моніторингом'
        },
        icon: 'auto_fix_high',
        title: { en: 'Pipeline Build', uk: 'Побудова конвеєра' }
      },
      {
        description: {
          en: 'Ongoing monitoring, maintenance, and optimization of automation systems',
          uk: 'Постійний моніторинг, обслуговування та оптимізація систем автоматизації'
        },
        icon: 'monitor_heart',
        title: { en: 'Operations Support', uk: 'Операційна підтримка' }
      }
    ],
    icon: 'auto_fix_high',
    phase: 4,
    slug: 'automation',
    title: { en: 'Process Automation', uk: 'Автоматизація процесів' }
  },
  {
    deliverable: {
      en: 'Autonomous AI Team',
      uk: 'Автономна AI команда'
    },
    description: {
      en: 'Your fully autonomous AI workforce that operates 24/7, handles complex tasks, and continuously learns and improves.',
      uk: 'Ваша повністю автономна AI-команда, яка працює 24/7, вирішує складні завдання та постійно навчається і покращується.'
    },
    features: [
      {
        description: {
          en: 'AI agents that work around the clock without human supervision',
          uk: 'AI-агенти, що працюють цілодобово без нагляду людини'
        },
        icon: 'nightlight',
        title: { en: '24/7 Operations', uk: 'Цілодобова робота' }
      },
      {
        description: {
          en: 'Continuous learning from outcomes to improve performance over time',
          uk: 'Постійне навчання на основі результатів для покращення продуктивності з часом'
        },
        icon: 'trending_up',
        title: { en: 'Self-Improvement', uk: 'Самовдосконалення' }
      },
      {
        description: {
          en: 'Full operational handoff with documentation, monitoring, and escalation protocols',
          uk: 'Повна операційна передача з документацією, моніторингом та протоколами ескалації'
        },
        icon: 'handshake',
        title: { en: 'Handoff Protocol', uk: 'Протокол передачі' }
      }
    ],
    icon: 'nightlight',
    phase: 5,
    slug: 'night-shift',
    title: { en: 'Night Shift', uk: 'Нічна Зміна' }
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => SERVICES.find(s => s.slug === slug);

export const getServiceByPhase = (phase: number): Service | undefined => SERVICES.find(s => s.phase === phase);
