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
export const TRIAL_CTA = 'Start free trial'

export const ANNOUNCEMENT =
  'Now with AI reply detection — flag hot leads the moment they respond'

export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
]

export const HERO = {
  headline: 'Make Instagram your #1 client acquisition channel.',
  subhead:
    'Reach 500+ prospects every month on Instagram. Auto-follow up until they reply. No VA needed. No manual sending. No accounts getting flagged.',
  // Honest risk reversal: the card requirement is real, framed as a safety net.
  trial: ['3-day free trial', 'Cancel before day 3 → $0 charged'],
  pills: [
    'Works with existing Instagram accounts',
    // Brief said "Chrome extension, nothing to install" — but the FAQ (and the
    // product) run in the cloud, so that line contradicts itself. Fixed here.
    'Runs in the cloud, nothing to install',
  ],
  whisper: 'the droid’s already warming up your accounts',
}

export const STATS = [
  { value: '30', label: 'Instagram accounts, one dashboard' },
  { value: 'Unlimited', label: 'No daily cap on personalized sends' },
  { value: '24/7', label: 'Runs overnight, weekends, while you close' },
  { value: '5 min', label: 'First campaign live in under 5 minutes' },
]

export const SOCIAL_PROOF = {
  line: 'Trusted by SMMA owners, coaches, and agencies running Instagram outreach across 15+ niches.',
  niches: [
    'Fitness Coaching',
    'SMMA',
    'E-com Brands',
    'Real Estate',
    'Info Products',
    'SaaS',
    'Recruiting',
  ],
  whisper: 'your niche is probably in here',
}

export type Step = {
  title: string
  body: string
  bullets: string[]
  /** Poses only appear on the two "the droid does the work" steps. */
  avatar?: { pose: 'stepRelax' | 'stepCelebrate'; caption: string }
}

export const STEPS: Step[] = [
  {
    title: 'Find your people',
    body: 'Pull your target list from anywhere — a scraped niche, a follower export, a custom CSV. Paste it in, the droid parses it.',
    bullets: [
      'Import via CSV, paste a list, or connect a scraping tool',
      'Custom fields auto-detected ({{FirstName}}, {{Niche}}, anything you add)',
      'De-duplication runs automatically',
    ],
  },
  {
    title: 'Write once, send forever',
    body: 'Build your opener and follow-ups with A/B variants. Use {{FirstName}}, {{Niche}}, or any field from your list. You write it once, the droid personalizes every send.',
    bullets: [
      'Up to 5 message variants per step (rotated automatically)',
      'Smart delays between steps — looks human, isn’t',
      'Preview exactly what each recipient will see before you launch',
    ],
  },
  {
    title: 'Launch and walk away',
    body: 'Hit launch. The droid handles rate limits, warmup, and timing. Your job is done until the replies come in.',
    bullets: [
      'Safe sending algorithms built in — no guesswork on limits',
      'Runs 24/7, pauses on weekends if you want',
      'Multi-account support: up to 30 accounts, one dashboard',
    ],
    avatar: {
      pose: 'stepRelax',
      caption: 'this is the part where you go touch grass',
    },
  },
  {
    title: 'Replies become booked calls',
    body: 'When someone replies, the sequence stops, they’re flagged as a hot lead, and they land in your visual pipeline. You close. The droid finds the next one.',
    bullets: [
      'AI reply detection classifies intent (interested / not interested / objection)',
      'Visual Kanban: followed → DM’d → replied → booked',
      'Connect to Calendly or any booking link for one-tap close',
    ],
    avatar: { pose: 'stepCelebrate', caption: 'hot leads, right here' },
  },
]

export const CONTRAST = {
  heading: 'Outreach shouldn’t feel like a second job.',
  tagline: 'From "ugh, I have to DM again" to "my droid already did it."',
  rows: [
    {
      old: 'Manually DMing 20–30 people a day until your thumbs give out',
      now: '500+ personalized DMs sent automatically, every day',
    },
    {
      old: 'Forgetting to follow up, losing warm leads forever',
      now: 'Follow-up sequences run on their own — until they reply',
    },
    {
      old: 'Managing multiple accounts across different phones and logins',
      now: 'Up to 30 accounts in one dashboard, isolated and safe',
    },
    {
      old: 'Hiring a VA to do repetitive outreach for $15/hour',
      now: 'The droid costs less and doesn’t need sick days',
    },
    {
      old: 'Zero visibility on what’s working across campaigns',
      now: 'Reply rates, variant stats, and pipeline — all in one view',
    },
    {
      old: 'Accounts getting flagged because you went too fast',
      now: 'Built-in warmup, rate caps, and health monitoring keep you safe',
    },
  ],
  cta: 'Switch to the DMDroid way',
  whisper: 'yeah, that’s actually us on the right',
}

export const FEATURES: {
  icon: LucideIcon
  title: string
  body: string
}[] = [
  {
    icon: Zap,
    title: 'The droid slides for you',
    body: 'Queue thousands of personalized openers. They go out on schedule, at human-like pace, while you do literally anything else.',
  },
  {
    icon: Repeat,
    title: 'Knows who’s interested before you do',
    body: 'DMDroid reads incoming replies, stops the sequence the instant someone bites, and flags them as a hot lead. No lead slips through.',
  },
  {
    icon: GitBranch,
    title: 'Watch your pipeline fill up live',
    body: 'Every contact moves from followed → DM’d → replied → booked on a live Kanban board. Your revenue, visualized in real time.',
  },
  {
    icon: Monitor,
    title: 'Run your whole agency from one tab',
    body: 'Connect up to 30 accounts through isolated browser sessions. One dashboard. Every account healthy and monitored.',
  },
  {
    icon: BarChart3,
    title: 'Know exactly what’s booking calls',
    body: 'Reply rate per variant, per campaign, per account. Double down on what works. Kill what doesn’t.',
  },
  {
    icon: ShieldCheck,
    title: 'The droid plays it safe so you don’t have to',
    body: 'Warmup schedules, daily caps, heartbeat monitoring. Built to stay under Instagram’s radar for the long haul.',
  },
]

export const AUDIENCES = [
  {
    title: 'SMMA Owners',
    body: 'Running outreach for clients and sick of the manual grind? The droid scales your delivery without scaling your headcount. Run multiple client accounts from a single dashboard.',
    bullets: [
      'Multi-account management built in',
      'Per-account analytics for client reporting',
      'White-label ready (Enterprise plan)',
    ],
  },
  {
    title: 'Coaches & Consultants',
    body: 'Your pipeline is your business. The droid keeps it full while you deliver. Stop spending 2 hours a day in DMs — that time is worth more than the tool costs.',
    bullets: [
      'AI reply detection flags interested leads instantly',
      'Follow-up sequences run until they reply or opt out',
      'Connects directly to your Calendly / booking link',
    ],
  },
  {
    title: 'Agencies Running DFY Outreach',
    body: 'Managing accounts for 5+ clients at once? DMDroid is your infrastructure. Isolated browser sessions per account, health monitoring, daily reports, and a pipeline view for every client.',
    bullets: [
      'Up to 30 accounts connected',
      'Warmup + safety built in per account',
      'Enterprise plan for unlimited accounts',
    ],
  },
]

export const AUDIENCE_WHISPER =
  'if this is you, we built this for you specifically'

/**
 * ⚠️ PLACEHOLDER TESTIMONIALS — NOT REAL CUSTOMERS.
 *
 * These come from the redesign brief as a structure to fill in. Publishing
 * invented endorsements is an FTC problem, so before this page goes live:
 * replace both entries with real, attributable quotes, or empty this array
 * (the section hides itself when it's empty).
 *
 * Star ratings and review badges are deliberately absent — the brief says
 * never fabricate them, and there's nothing verified to show yet.
 */
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      'I was manually DMing 30 people a day and burning out. Set DMDroid up on a Sunday, had 4 replies by Tuesday.',
    name: 'Marcus',
    role: 'Fitness SMMA Owner',
  },
  {
    quote:
      'My first campaign had a 23% reply rate. I’ve been doing cold outreach for 2 years and never hit that manually.',
    name: 'Sarah',
    role: 'Business Coach',
  },
]

export const PLANS = [
  {
    name: 'Solo Operator',
    price: '$69',
    period: '/mo',
    desc: 'One account. Full power.',
    features: [
      '1 Instagram account, fully isolated',
      'Unlimited personalized DMs',
      'Full sequence builder (up to 10 steps)',
      'A/B variant testing',
      'AI reply detection',
      'Visual pipeline + analytics',
      '24/7 support',
    ],
    cta: TRIAL_CTA,
    featured: false,
  },
  {
    name: 'Agency',
    price: 'From $106',
    period: '/mo',
    desc: 'Multiple accounts. One dashboard.',
    features: [
      '2–30 connected accounts',
      'Volume discount per account (scales down as you add more)',
      'Everything in Solo Operator',
      'Per-account health monitoring',
      'Priority support',
    ],
    cta: TRIAL_CTA,
    featured: true,
  },
  {
    name: 'Done-For-You',
    price: 'Custom',
    period: '',
    desc: 'We run it for you.',
    features: [
      'Unlimited accounts',
      'Managed RDP + proxy infrastructure',
      'Full campaign setup and management',
      'Dedicated success manager',
      'White-glove onboarding',
    ],
    cta: 'Contact us',
    featured: false,
  },
]

export const PRICING = {
  heading: 'Plans that match where you are.',
  tagline:
    'Every plan starts with a 3-day free trial. Try the droid before you commit.',
  riskReversal:
    'Not happy after 3 days? Cancel before the trial ends and you won’t be charged a cent. No hoops, no questions.',
  whisper: 'the droid is confident you’ll stay',
}

export const FAQS = [
  {
    q: 'Will my Instagram account get banned?',
    a: 'The droid is built paranoid. Every account runs in its own isolated browser session. Warmup schedules ease it in. Rate caps keep it under Instagram’s radar. Heartbeat monitoring catches anomalies before they become problems. We take account health seriously because your accounts are your business.',
  },
  {
    q: 'Do I need to keep my computer on?',
    a: 'Nope. DMDroid runs on our cloud. Set your campaign, close your laptop, and the droid keeps working. Check back in the morning.',
  },
  {
    q: 'How many messages can I send per day?',
    a: 'It depends on your account’s warmup stage. New accounts start slow and ramp up over time. Established accounts can send significantly more. The droid manages this automatically — you don’t configure limits manually unless you want to.',
  },
  {
    q: 'Do I need my own Instagram account?',
    a: 'Yes. DMDroid works with your existing Instagram accounts. We don’t provide accounts. You bring the accounts, the droid does the rest.',
  },
  {
    q: 'Is there really a free trial? Do I need a card?',
    a: 'Yes, 3 days free. Yes, a card is required — but it won’t be charged if you cancel before day 3. We ask for it upfront to keep trial abuse low and support quality high. Fair trade.',
  },
  {
    q: 'Can I run multiple accounts?',
    a: 'Up to 30 on the Agency plan. Each account runs in complete isolation — separate browser sessions, separate proxies, no cross-contamination. Add or remove accounts anytime from the dashboard.',
  },
]

export const FINAL_CTA = {
  heading: 'Start booking calls today.',
  tagline: 'And wake up to replies tomorrow.',
  cta: 'Start your free trial',
  whisper: 'the droid is ready when you are.',
}

export const FOOTER = {
  tagline:
    'Instagram DM automation for agencies and coaches who are done doing it by hand.',
  footnote: 'Built by a founder who was tired of DMing manually.',
}
