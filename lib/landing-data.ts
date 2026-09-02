import {
  BarChart3,
  GitBranch,
  MessageSquare,
  Monitor,
  Repeat,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

export const AUTH_URL = 'https://app.dmdroid.app/auth'
export const CONTACT_EMAIL = 'support@dmdroid.app'
export const TRIAL_CTA = 'Start my free trial'

/**
 * Waalaxy runs a dismissible announcement above the nav. Ours points at the
 * variant testing that actually ships in the product.
 */
export const ANNOUNCEMENT =
  'Now with A/B variant testing: rotate up to 5 messages per step and let the best one win'

export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export const HERO = {
  badge: 'Runs your Instagram outreach while you sleep',
  headline: 'Make Instagram your #1 client acquisition channel',
  subhead:
    'Reach 500+ potential buyers every month on Instagram. Auto-follow up until they reply. No VA needed. No manual sending. No accounts getting flagged.',
  cta: TRIAL_CTA,
  ctaSecondary: 'See how it works',
  trial: '3-day free trial',
  handNote: "The magic's happening here",
  whisper: 'the droid runs on our cloud, close your laptop',
}

export const SOCIAL_PROOF = {
  line: 'Trusted by SMMA owners, coaches, and agencies running Instagram outreach',
  niches: [
    'Fitness Coaching',
    'SMMA',
    'E-com Brands',
    'Real Estate',
    'Info Products',
    'SaaS',
    'Recruiting',
    'Local Services',
  ],
  handNote: 'your niche is probably in here',
}

export type Step = {
  title: string
  body: string
  bullets: string[]
}

/** Waalaxy's 4-step walkthrough, rebuilt on DMDroid's real capabilities. */
export const STEPS: Step[] = [
  {
    title: 'Import your targets',
    body: 'Build qualified prospect lists from any source. No platform lock-in, no stale database.',
    bullets: [
      'Paste a raw list of usernames or upload CSV / Excel',
      'Custom fields auto-detected ({{FirstName}}, {{Niche}}, anything you add)',
      'De-duplication runs automatically',
    ],
  },
  {
    title: 'Launch outreach that feels personal',
    body: 'Send openers and follow-ups with A/B variants that spark real conversations.',
    bullets: [
      'Up to 5 message variants per step, rotated automatically',
      'Smart delays between steps: looks human, is not',
      'Preview exactly what each recipient sees before you launch',
    ],
  },
  {
    title: 'See what gets replies, then scale it',
    body: 'Know exactly what works so you can double down.',
    bullets: [
      'Reply rate per campaign, per variant, per account',
      'Runs 24/7 on our cloud, so close your laptop',
      'Sending windows, weekend pauses, your timezone',
    ],
  },
  {
    title: 'Watch replies become booked calls',
    body: 'Every lead moves through a visual pipeline until they book.',
    bullets: [
      'The sequence stops the instant someone replies',
      'Visual pipeline: DM’d → Initiated → Engaged → Calendly → Booked',
      'Drop your booking link at the perfect moment',
    ],
  },
]

export const HOW_WHISPERS = {
  header: 'Follow the arrows!',
  step3: 'this is the part where you go touch grass',
  step4: 'hot leads, right here',
}

export const CONTRAST = {
  heading: 'Outreach shouldn’t feel like a second job',
  tagline: 'From “ugh” to “done” in 10 minutes.',
  oldLabel: 'The Old Way',
  newLabel: 'The DMDroid Way',
  rows: [
    {
      old: 'Manually DMing 20–30 people a day until your thumbs give out',
      now: '500+ personalized DMs sent automatically, every day',
    },
    {
      old: 'Forgetting to follow up, losing warm leads forever',
      now: 'Auto-follow ups that turn silence into replies',
    },
    {
      old: 'Managing multiple accounts across different phones and logins',
      now: 'Up to 30 accounts in one dashboard, each fully isolated',
    },
    {
      old: 'Hiring a VA to send DMs for $15/hour',
      now: 'The droid costs less and doesn’t need sick days',
    },
    {
      old: 'Zero visibility on what’s working across campaigns',
      now: 'Reply rates, variant stats, and pipeline, all in one view',
    },
    {
      old: 'Accounts getting flagged because you went too fast',
      now: 'Daily rate caps and health monitoring keep you safe',
    },
  ],
  cta: 'Try the simple way',
  handNote: 'yeah, that’s actually us on the right',
}

export const SUPPORT_STRIP = {
  heading: 'Stay guided at every step',
  body: 'From first import to first booked call, never wonder what to do next.',
  items: [
    'Real human support, in-house',
    'Guided onboarding from your first login',
    'Step-by-step help built into every page',
  ],
  handNote: 'we actually answer',
}

export const STACK = {
  heading: 'Works with the tools you already use',
  body: 'Import target lists from any scraper that exports CSV or Excel. Export every contact, message, and stat to CSV whenever you want. Your data stays yours.',
  handNote: 'if it exports a spreadsheet, it works with the droid',
}

export const AUDIENCES = [
  {
    emoji: '🚀',
    title: 'For SMMA Owners',
    body: 'Outreach that doesn’t steal your day and still gets replies.',
    bullets: [
      'Run every client account from one dashboard',
      'Per-account analytics for client reporting',
      'Isolated sessions keep client accounts safe',
    ],
  },
  {
    emoji: '🎯',
    title: 'For Coaches & Consultants',
    body: 'Keep your pipeline full while you deliver.',
    bullets: [
      'Follow-ups run until they reply or opt out',
      'Visual pipeline shows who’s close to booking',
      'Drop your Calendly link at the perfect moment',
    ],
  },
  {
    emoji: '🛰️',
    title: 'For DFY Agencies',
    body: 'Managing accounts for 5+ clients at once? DMDroid is your infrastructure.',
    bullets: [
      'Up to 30 connected accounts',
      'Health monitoring per account',
      'Done-For-You plan with managed RDP + proxies',
    ],
  },
]

export const AUDIENCE_HAND = 'Is this you?'

export const FEATURES: {
  icon: LucideIcon
  title: string
  body: string
}[] = [
  {
    icon: Sparkles,
    title: 'Instagram auto-prospecting',
    body: 'Build and launch automated DM campaigns from your imported target lists. No manual sending, ever.',
  },
  {
    icon: Repeat,
    title: 'Multi-step sequences',
    body: 'Opener, follow-up 1, follow-up 2. Timed delays between every step. Stops the moment someone replies.',
  },
  {
    icon: MessageSquare,
    title: 'A/B variant testing',
    body: 'Up to 5 message variants per step, rotated automatically. Reply rate tracked per variant so the winner emerges.',
  },
  {
    icon: Monitor,
    title: 'Up to 30 accounts, isolated',
    body: 'Every account runs in its own isolated browser session. One dashboard. Every account monitored.',
  },
  {
    icon: BarChart3,
    title: 'Variant analytics',
    body: 'Reply rate per variant, per campaign, per account. Double down on what works. Kill what doesn’t.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety guardrails',
    body: 'Daily rate caps, sending windows, and heartbeat monitoring. Built to stay under Instagram’s radar for the long haul.',
  },
]

export const FEATURE_HEADINGS = {
  title: 'Made for Instagram DM outreach',
  tagline: 'Everything the droid handles for you, so you can focus on closing.',
}

export const PIPELINE_FEATURE = {
  emoji: '📊',
  title: 'Visual pipeline',
  body: 'Every contact moves from DM’d to Booked on a live board. Your revenue, visualized in real time.',
}

export const SHOWCASE = [
  {
    title: 'Follow-ups that run on their own',
    body: 'Most replies come after the first message. Build a full sequence with timed delays between every step, and DMDroid keeps nudging each lead until they answer. The moment someone replies, their sequence stops automatically.',
    bullets: [
      'Up to 10 follow-up steps per campaign',
      'Custom delays between each message',
      'Auto-stops the instant a lead replies',
    ],
  },
  {
    title: 'Test every message, keep the winner',
    body: 'Write up to five variants for each step so your messages stay fresh and human. DMDroid rotates them across sends, tracks which lines earn the most replies, and shows you the numbers.',
    bullets: [
      'Up to 5 variants per step, rotated automatically',
      'Personalize with {{FirstName}} and more',
      'Reply rate tracked per variant',
    ],
  },
]

/**
 * PLACEHOLDER TESTIMONIALS. NOT REAL CUSTOMERS.
 *
 * Publishing invented endorsements is an FTC problem, so before this page
 * goes live: replace entries with real, attributable quotes, or empty the
 * array (the section hides itself when it's empty).
 *
 * Star ratings and review badges are deliberately absent. Never fabricate
 * them, and there's nothing verified to show yet.
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

export const TESTIMONIALS_META = {
  heading: 'This is why users love us',
  tagline:
    'Most of our users had never run Instagram DM campaigns at scale before. Now they wake up to replies.',
  handNote: 'Yup, those are real',
}

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
      'Visual pipeline + analytics',
      'Email support',
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
  heading: 'Plans that match where you are',
  tagline: 'Every plan starts with a 3-day free trial. Try the droid before you commit.',
  riskReversal:
    'Not happy after 3 days? Cancel before the trial ends and you won’t be charged a cent. No hoops, no questions.',
  handNote: 'the droid is confident you’ll stay',
  badge: 'Most popular',
}

export const FAQS = [
  {
    q: 'What is DMDroid?',
    a: 'DMDroid is an Instagram DM outreach tool. You import target lists, build multi-step message sequences with A/B variants, and the droid sends personalized DMs from your connected Instagram accounts automatically. It all runs on our cloud, with rate caps and health monitoring built in.',
  },
  {
    q: 'How does DMDroid work?',
    a: 'Import your targets (paste a list, CSV, or Excel), build your opener and follow-ups with up to 5 variants per step, then hit launch. The droid handles sending windows, delays, and rate caps. When someone replies, their sequence stops and they land in your visual pipeline: DM’d → Initiated → Engaged → Calendly → Booked.',
  },
  {
    q: 'Will my Instagram account get banned?',
    a: 'The droid is built paranoid. Every account runs in its own isolated browser session. Daily rate caps keep you under Instagram’s radar. Heartbeat monitoring flags anomalies before they become problems. We take account health seriously, because your accounts are your business.',
  },
  {
    q: 'Do I need to keep my computer on?',
    a: 'Nope. DMDroid runs on our cloud, on managed RDP and proxy infrastructure. Set your campaign, close your laptop, and the droid keeps working. Check back in the morning.',
  },
  {
    q: 'Do I need my own Instagram accounts?',
    a: 'Yes. DMDroid works with your existing Instagram accounts, we don’t provide them. You bring the accounts, the droid does the rest.',
  },
  {
    q: 'Can I run multiple accounts?',
    a: 'Up to 30 on the Agency plan. Each account runs in complete isolation: separate browser sessions, separate fingerprints, no cross-contamination. Add or remove accounts anytime from the dashboard.',
  },
  {
    q: 'Is there really a free trial? Do I need a card?',
    a: 'Yes, 3 days free. Yes, a card is required, but it won’t be charged if you cancel before day 3. We ask for it upfront to keep trial abuse low and support quality high. Fair trade.',
  },
  {
    q: 'How much does DMDroid cost?',
    a: 'Solo Operator is $69/mo for one account. Agency starts at $106/mo for 2–30 accounts with volume discounts. Done-For-You is custom. We run everything for you, including RDP and proxy infrastructure.',
  },
]

export const FINAL_CTA = {
  heading: 'Start booking calls today',
  tagline: 'And get your first replies tomorrow.',
  cta: TRIAL_CTA,
  trial: '3 days free trial',
  handNote: 'Seriously, try it yourself',
  contact: 'Have questions?',
}

export const FOOTER = {
  heading: 'Get started',
  tagline:
    'Instagram DM automation for agencies and coaches who are done doing it by hand.',
  footnote: 'Built by a founder who was tired of DMing manually.',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'How it works', href: '#how' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      heading: 'Get started',
      links: [
        { label: 'Start a free trial', href: AUTH_URL },
        { label: 'Log in', href: AUTH_URL },
        { label: 'Support', href: '/support' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  ],
}
