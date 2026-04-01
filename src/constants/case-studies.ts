import type { CaseStudy } from '@/types/case-study';

export const CASE_STUDIES: CaseStudy[] = [
  {
    challenge: {
      en: 'Scaling a dev team to deliver multiple concurrent projects without proportionally increasing headcount',
      uk: 'Масштабування команди розробників для одночасної роботи над кількома проєктами без пропорційного збільшення чисельності'
    },
    client: 'Product Studio',
    description: {
      en: 'How a small team shipped 5 concurrent projects using AI-assisted development, generating 2500+ commits and 300K+ lines of production code.',
      uk: 'Як невелика команда випустила 5 одночасних проєктів за допомогою AI-розробки, створивши 2500+ комітів та 300K+ рядків production-коду.'
    },
    insight: {
      en: 'AI amplifies output, not headcount. One senior engineer with the right AI workflow can deliver what previously required a full team.',
      uk: 'AI підсилює результат, а не чисельність. Один старший інженер з правильним AI-воркфлоу може досягти того, що раніше вимагало цілої команди.'
    },
    metrics: [
      { label: { en: 'Commits', uk: 'Коміти' }, value: '2500+' },
      { label: { en: 'Lines of code', uk: 'Рядки коду' }, value: '300K+' },
      { label: { en: 'Concurrent projects', uk: 'Паралельні проєкти' }, value: '5' }
    ],
    results: {
      en: '5 production projects delivered simultaneously with a team of 2, maintaining code quality and full test coverage.',
      uk: '5 production-проєктів доставлено одночасно командою з 2 людей зі збереженням якості коду та повним тестовим покриттям.'
    },
    slug: 'ai-development',
    solution: {
      en: 'Implemented AI-assisted development workflow with Claude Code, automated testing pipelines, and parallel agent orchestration.',
      uk: 'Впровадили AI-асистований воркфлоу розробки з Claude Code, автоматизованими конвеєрами тестування та оркестрацією паралельних агентів.'
    },
    tags: ['development', 'productivity', 'multi-project'],
    title: { en: 'AI-Powered Development', uk: 'AI-розробка' }
  },
  {
    challenge: {
      en: 'Full software development lifecycle required coordination across planning, coding, review, testing, and deployment — too many context switches',
      uk: 'Повний цикл розробки програмного забезпечення вимагав координації між плануванням, кодуванням, ревью, тестуванням та деплоєм — забагато перемикань контексту'
    },
    client: 'Engineering Team',
    description: {
      en: 'Complete SDLC automation with 21 slash commands, 8 specialized agent roles, and a multi-phase orchestration system.',
      uk: 'Повна автоматизація SDLC з 21 slash-командою, 8 спеціалізованими ролями агентів та багатофазною системою оркестрації.'
    },
    insight: {
      en: 'The biggest productivity gains come not from automating individual tasks, but from eliminating the friction between them.',
      uk: 'Найбільші приросту продуктивності досягаються не автоматизацією окремих завдань, а усуненням тертя між ними.'
    },
    metrics: [
      { label: { en: 'Slash commands', uk: 'Slash-команди' }, value: '21' },
      { label: { en: 'Agent roles', uk: 'Ролі агентів' }, value: '8' },
      { label: { en: 'SDLC phases automated', uk: 'Фази SDLC автоматизовано' }, value: '100%' }
    ],
    results: {
      en: 'End-to-end SDLC automation reduced cycle time by 70% and eliminated manual handoffs between development phases.',
      uk: 'Наскрізна автоматизація SDLC скоротила час циклу на 70% та усунула ручні передачі між фазами розробки.'
    },
    slug: 'ai-sdlc',
    solution: {
      en: 'Built a comprehensive multi-agent orchestration system with specialized agents for each SDLC phase and automated handoff protocols.',
      uk: 'Побудували комплексну мультиагентну систему оркестрації зі спеціалізованими агентами для кожної фази SDLC та автоматизованими протоколами передачі.'
    },
    tags: ['sdlc', 'automation', 'orchestration'],
    title: { en: 'AI SDLC Automation', uk: 'Автоматизація AI SDLC' }
  },
  {
    challenge: {
      en: 'Enterprise team of 40+ engineers needed to adopt AI tools without disrupting established workflows and quality standards',
      uk: 'Корпоративна команда з 40+ інженерів потребувала впровадження AI-інструментів без порушення усталених воркфлоу та стандартів якості'
    },
    client: 'Grid Dynamics',
    description: {
      en: 'Taking Grid Dynamics from 25% AI-assisted code to 99%, generating 1700+ commits and establishing enterprise AI standards.',
      uk: 'Переведення Grid Dynamics з 25% AI-асистованого коду до 99%, з генерацією 1700+ комітів та встановленням корпоративних стандартів AI.'
    },
    insight: {
      en: 'Enterprise AI adoption is a culture change, not a tool change. The technical integration is straightforward; building trust and habits takes systematic effort.',
      uk: 'Корпоративне впровадження AI — це зміна культури, а не зміна інструменту. Технічна інтеграція проста; побудова довіри та звичок вимагає системних зусиль.'
    },
    metrics: [
      { label: { en: 'Commits generated', uk: 'Згенеровано комітів' }, value: '1700+' },
      { label: { en: 'AI-assisted code', uk: 'AI-асистований код' }, value: '99%' },
      { label: { en: 'Starting baseline', uk: 'Початковий рівень' }, value: '25%' }
    ],
    results: {
      en: 'Team achieved 99% AI-assisted development with maintained code quality, established reusable AI workflows, and documented best practices.',
      uk: 'Команда досягла 99% AI-асистованої розробки зі збереженою якістю коду, встановленими повторно використовуваними AI-воркфлоу та задокументованими найкращими практиками.'
    },
    slug: 'enterprise-ai',
    solution: {
      en: 'Systematic rollout with role-based training, custom prompt libraries, AI code review integration, and team-specific playbooks.',
      uk: 'Систематичне розгортання з навчанням за ролями, бібліотеками власних промптів, інтеграцією AI code review та плейбуками для команди.'
    },
    tags: ['enterprise', 'adoption', 'training'],
    title: { en: 'Enterprise AI Adoption', uk: 'Корпоративне впровадження AI' }
  },
  {
    challenge: {
      en: 'Technical interviews consumed enormous engineering time while producing inconsistent evaluations across candidates',
      uk: 'Технічні співбесіди поглинали величезний інженерний час, при цьому даючи непослідовні оцінки кандидатів'
    },
    client: 'Hiring Team',
    description: {
      en: 'Transforming the technical interview process with AI: 14 candidates screened, 75% prep time reduction, and a 7-tier grading system.',
      uk: 'Трансформація процесу технічних співбесід за допомогою AI: 14 кандидатів відібрано, скорочення часу підготовки на 75% та 7-рівнева система оцінювання.'
    },
    insight: {
      en: 'Structured AI-assisted evaluation removes interviewer bias while actually capturing more signal about candidate capabilities.',
      uk: "Структурована AI-асистована оцінка усуває упередженість інтерв'юера, одночасно дійсно захоплюючи більше сигналів про можливості кандидата."
    },
    metrics: [
      { label: { en: 'Candidates screened', uk: 'Відібрано кандидатів' }, value: '14' },
      { label: { en: 'Prep time reduction', uk: 'Скорочення часу підготовки' }, value: '75%' },
      { label: { en: 'Grading tiers', uk: 'Рівні оцінювання' }, value: '7' }
    ],
    results: {
      en: 'Interview process standardized, evaluation consistency improved to 95%, and total interviewing time reduced by 60%.',
      uk: 'Процес співбесіди стандартизовано, послідовність оцінювання покращено до 95%, а загальний час проведення співбесід скорочено на 60%.'
    },
    slug: 'ai-interviews',
    solution: {
      en: 'Built AI-assisted interview framework with structured question banks, automated candidate analysis, and standardized 7-tier scoring rubrics.',
      uk: 'Побудували AI-асистований фреймворк для співбесід зі структурованими банками питань, автоматизованим аналізом кандидатів та стандартизованими 7-рівневими рубриками оцінювання.'
    },
    tags: ['hiring', 'evaluation', 'hr-automation'],
    title: { en: 'AI-Assisted Interviews', uk: 'AI-асистовані співбесіди' }
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => CASE_STUDIES.find(c => c.slug === slug);
