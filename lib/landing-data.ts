import {
  BarChart3,
  GitBranch,
  Monitor,
  Repeat,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export const AUTH_URL = 'https://app.dmdroid.app/auth'
export const CONTACT_EMAIL = 'hello@dmdroid.app'
export const TRIAL_CTA = 'Start 3-day free trial'

export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
]

export const STATS = [
  { value: 'Up to 30', label: 'Accounts' },
  { value: 'Unlimited', label: 'Messages / day' },
  { value: '24/7', label: 'Automated sending' },
  { value: '5 min', label: 'Setup time' },
]

export const STEPS = [
  {
    step: '01',
    title: 'Connect your accounts',
    body: 'Link your Instagram accounts through isolated, secure browser instances. One-click setup, no passwords stored in plaintext.',
  },
  {
    step: '02',
    title: 'Build your campaign',
    body: 'Import your target list, then write your opener and follow-ups with A/B variants and smart delays.',
  },
  {
    step: '03',
    title: 'Launch & book calls',
    body: 'DMDroid handles rate limits, warmup, and follow-ups automatically. Hot leads land straight in your pipeline.',
  },
]

export const FEATURES: {
  icon: LucideIcon
  title: string
  body: string
}[] = [
  {
    icon: Zap,
    title: 'Automated daily DMs',
    body: 'Queue thousands of personalized first messages and let DMDroid drip them out within human-like limits.',
  },
  {
    icon: Repeat,
    title: 'AI reply detection',
    body: 'DMDroid reads incoming replies, stops the sequence instantly, and flags hot leads so no conversation slips through.',
  },
  {
    icon: GitBranch,
    title: 'Visual pipeline',
    body: 'Track every lead from followed → DM’d → replied → booked on a Kanban board that updates in real time.',
  },
  {
    icon: Monitor,
    title: 'Multi-account support',
    body: 'Connect up to 30 Instagram accounts through isolated browser sessions with live health monitoring.',
  },
  {
    icon: BarChart3,
    title: 'Funnel analytics',
    body: 'Send rate, reply rate, and conversion rate — broken down per campaign and per message variant.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety guardrails',
    body: 'Warmup schedules, daily rate caps, and heartbeat monitoring keep your accounts healthy and under the radar.',
  },
]

export const PLANS = [
  {
    name: 'Pro',
    price: '$69',
    period: '/mo',
    desc: 'For solo operators running a single account.',
    features: [
      '1 connected account',
      'Unlimited messages',
      'Safe sending algorithms',
      '24/7 support',
    ],
    cta: TRIAL_CTA,
    featured: false,
  },
  {
    name: 'Scale',
    price: 'From $106',
    period: '/mo',
    desc: 'For agencies running multiple accounts.',
    features: [
      '2 to 30 connected accounts',
      'Volume discounts per account',
      'Everything in Pro',
      'Priority 24/7 support',
    ],
    cta: TRIAL_CTA,
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For teams that need it all.',
    features: [
      'Unlimited accounts',
      'White-glove onboarding',
      'Dedicated success manager',
      'Priority support',
    ],
    cta: 'Contact us',
    featured: false,
  },
]

export const FAQS = [
  {
    q: 'Will my Instagram account get banned?',
    a: 'DMDroid is built around account safety. Every account runs in its own isolated browser session with warmup schedules, human-like sending limits, and heartbeat monitoring. We stay well within Instagram’s activity thresholds so your accounts stay healthy.',
  },
  {
    q: 'Do I need to keep my computer on?',
    a: 'No. DMDroid runs in the cloud 24/7. Campaigns keep sending, following up, and collecting replies whether your laptop is open or closed.',
  },
  {
    q: 'How many messages can I send per day?',
    a: 'Message volume is unlimited on every paid plan, but DMDroid automatically paces sending within safe, human-like daily caps per account to protect your deliverability.',
  },
  {
    q: 'Do I need my own Instagram account?',
    a: 'Yes. You connect your own Instagram account(s) to DMDroid. Depending on your plan you can connect anywhere from 1 to 30 accounts.',
  },
  {
    q: 'Is there really a free trial? Do I need a card?',
    a: 'Yes — every plan starts with a 3-day free trial. A credit card is required to start, but you can cancel anytime before day 3 and you won’t be charged a cent.',
  },
  {
    q: 'Can I run multiple accounts?',
    a: 'Absolutely. The Scale plan supports 2 to 30 accounts with per-account volume discounts, and Enterprise unlocks unlimited accounts.',
  },
]
