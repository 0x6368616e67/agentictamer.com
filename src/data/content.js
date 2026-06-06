import {
  IconChat, IconSupport, IconPartner,
  IconShield, IconLock, IconScale, IconDoor,
  IconBadge, IconBranch, IconGlobe, IconTarget,
} from '../components/icons.jsx'

// ── Pricing tiers ──────────────────────────────────────────────
export const tiers = [
  {
    id: 'advisor',
    accent: 'teal',
    Icon: IconChat,
    name: '技术顾问',
    tagline: '您的技术朋友与顾问',
    role: '技术顾问',
    position: '作为您的技术朋友，为您提供忠实的、客观的、符合您环境的技术建议。',
    approach: '提供面对面 / 电话 / IM 等渠道的聊天、问答与讨论。',
    price: '$3,000',
    unit: '/月',
    rmb: '约 ¥21,000',
    meta: [
      { label: '起订：1 个月', sub: '按年付 95 折' },
      { label: '服务时间：8-12 小时', sub: '约每周 2-3 小时，灵活安排' },
    ],
    includes: [
      '技术选型建议、架构评审、技术选型对比分析文档',
      '技术债务评估、团队成长建议、团队技术能力评估/学习路径建议',
      '定期复盘会',
      '即时消息（Telegram/微信等）异步问答，紧急事务可电话',
    ],
    excludes: [
      '不写生产代码、不参与日常站会、不处理线上故障不参与实际运维、不直接管理团队、不对项目进度负责',
    ],
  },
  {
    id: 'support',
    accent: 'blue',
    Icon: IconSupport,
    name: '技术支持',
    tagline: '协助实现您的想法',
    role: '技术骨干',
    position: '作为您的技术朋友，协助您一起实现您的想法和需求。',
    approach: '参与到技术团队中，根据项目需求完成一定程度的需求实现并提交代码。',
    price: '$5,000',
    unit: '/月',
    rmb: '约 ¥35,000',
    meta: [
      { label: '起订：3 个月', sub: '按年付 95 折' },
      { label: '服务时间：20-30 小时', sub: '约每周 5-7 小时，需固定部分时间' },
    ],
    includes: [
      '参与核心模块开发',
      'Code Review（逐行）、技术方案设计、PR 审核',
      '参与项目技术站会、Sprint 规划',
    ],
    excludes: [
      '不承担项目管理全责、不替代现有 Tech Lead、不负责团队管理、不直接面试员工',
    ],
  },
  {
    id: 'cofounder',
    accent: 'purple',
    Icon: IconPartner,
    name: '技术合伙',
    tagline: '技术伙伴 & 技术负责人',
    role: '技术总监',
    position: '作为您的技术伙伴，和您一起探讨产品解决方案，并协同您的技术团队一起落实。',
    approach: '除技术方案落地实施外，还提供技术方案、技术员工面试、技术团队管理等管理服务。',
    price: '$9,000',
    unit: '/月',
    rmb: '约 ¥63,000',
    meta: [
      { label: '起订：6 个月', sub: '按年付 95 折' },
      { label: '服务时间：40-60 小时', sub: '接近半职，需固定参与核心会议' },
    ],
    includes: [
      '技术战略制定、架构顶层设计、输出技术方案设计文档',
      '团队搭建/优化、绩效考核建议、技术文化塑造',
      '参与技术招聘：编写 JD、筛选简历、主持技术面、给出录用建议',
      '关键代码攻坚、重大技术决策',
    ],
    excludes: [
      '不替代 CEO 做商业决策、不承担融资/销售职责',
    ],
  },
]

// ── Risk control & agreement clauses ───────────────────────────
export const clauses = [
  {
    Icon: IconShield,
    title: '知识产权归属',
    body: '约定你在服务期间产出的代码、文档等知识产权，在客户全额支付后归客户所有。',
  },
  {
    Icon: IconLock,
    title: '保密与竞业',
    body: '签署 NDA，但限制竞业范围（如禁止服务期内同时为直接竞品提供相同档位服务）。',
  },
  {
    Icon: IconScale,
    title: '责任上限',
    body: '赔偿上限为「已收取的服务费总额」。',
  },
  {
    Icon: IconDoor,
    title: '终止条款',
    body: '双方可提前 30 天书面通知终止，但已支付款项不退，未开始的服务期按比例结算。',
  },
]

// ── Trust badges (bottom CTA) ──────────────────────────────────
export const trustBadges = [
  { Icon: IconBadge, label: '10+ 年\n研发经验' },
  { Icon: IconBranch, label: '多行业\n项目经验' },
  { Icon: IconGlobe, label: '全球化\n技术视野' },
  { Icon: IconTarget, label: '以结果\n为导向' },
]
