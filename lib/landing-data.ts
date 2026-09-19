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


export const NAV_LINKS = [
  { href: '/#how', label: 'How it works' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
]

export const HERO = {
  badge: 'Runs on your PC or VPS — you just reply',
  headline: 'Cold DM outreach for Instagram',
  subhead:
    'DMDroid automates cold DM outreach on Instagram — 500+ people a day across your accounts, followed up until they reply. No VA. No manual sending.',
  cta: TRIAL_CTA,
  ctaSecondary: 'See how it works',
  trial: '3-day free trial',
  handNote: "The magic's happening here",
  whisper: 'runs on your machine — keep it on, or use a VPS',
}

export const SOCIAL_PROOF = {
  line: 'Trusted by SMMA owners, coaches, and agencies running Instagram outreach',
  niches: [
    'SMMA',
    'Info Products',
    'Real Estate',
    'E-com Brands',
    'SaaS',
  ],
  handNote: '',
}

export type Step = {
  title: string
  body: string
  bullets: string[]
}

/** Waalaxy's 4-step walkthrough, rebuilt on DMDroid's real capabilities. */
export const STEPS: Step[] = [
  {
    title: 'Find your prospects, from anywhere',
    body: 'Build qualified Instagram prospect lists from any source no platform lock-in, no stale data.',
    bullets: [
      'Paste usernames or upload CSV/Excel, you\'re live in minutes',
      'Custom merge fields auto-detected: {{FirstName}}, {{Niche}}, anything you add',
      'Auto de-duplication runs on every import, keeping your list clean',
    ],
  },
  {
    title: 'Launch outreach that feels personal',
    body: 'Send openers and follow-ups with A/B variants that spark real conversations, at scale.',
    bullets: [
      'Up to 10 message variants per step, rotated automatically',
      'Smart delays between messages: looks human, is not',
      'Preview exactly what each recipient sees before you hit send',
    ],
  },
  {
    title: 'See what gets replies, then scale it',
    body: 'Know exactly what works by campaign, by variant, by account, so you double down fast.',
    bullets: [
      'Reply rates broken down per campaign, per variant, per account',
      'Runs while your PC is on — or 24/7 on a VPS',
      'Sending windows, weekend pauses, timezone-aware scheduling',
    ],
  },
  {
    title: 'Reply to every lead from one inbox',
    body: 'Every campaign reply lands in one place, so no hot lead gets lost across accounts.',
    bullets: [
      'Unified inbox: every reply from every campaign, every account',
      'Full conversation context right beside each message',
      'Drop your booking link at the perfect moment, right from the inbox',
    ],
  },
  {
    title: 'Stay guided at every step',
    body: 'From first prospect to first reply, never wonder what to do next.',
    bullets: [
      'Real human support, in-house. Always here to help.',
      'Clear, step-by-step tutorials inside the product.',
      'AI assistant trained on our playbooks to find prospects and craft messages (soon)',
    ],
  },
]

export const HOW_WHISPERS = {
  header: 'Follow the arrows!',
  step3: 'this is the part where you go touch grass',
  step4: 'hot leads, right here',
  step5: 'we actually answer',
}

export const CONTRAST = {
  heading: 'Outreach shouldn’t feel like a second job',
  tagline: 'From “ugh” to “done” in 10 minutes.',
  oldLabel: 'The Old Way',
  newLabel: 'The DMDroid Way',
  rows: [
    {
      old: 'Manually DMing 20–30 people a day until your thumbs give out',
      now: '500+ people a day, spread across your accounts',
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
    q: 'What is an Instagram DM?',
    a: 'A DM (direct message) is a private conversation on Instagram — and it’s where deals actually start. Most outreach dies in the DMs because nobody follows up. DMDroid automates exactly that: it sends your opener and follow-ups from your own account and stops the moment someone replies, so every conversation stays human.',
  },
  {
    q: 'What is DMDroid?',
    a: 'DMDroid is an Instagram DM outreach tool. You import target lists, build multi-step message sequences with A/B variants, and the droid sends personalized DMs from your connected Instagram accounts automatically. It runs in your own browser session on your machine — keep your PC on while campaigns run, use a VPS for 24/7, or hand it all to Done-For-You. Rate caps and health monitoring built in.',
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
    q: 'How do I get more Instagram DMs?',
    a: 'Two ways. Manual: DM 20–30 targeted prospects a day and follow up 3–5 times — most people quit after one message, which is where most replies come from. Automated: DMDroid does the same thing at scale. Import your list, build your sequence with up to 5 variants per step, and the droid sends and follows up until they reply. Most users reach 500+ people a day, spread across 10+ connected accounts.',
  },
  {
    q: 'How do you DM someone on Instagram for business?',
    a: 'Find a real reason — their content, their offer, a mutual niche. Open with one specific line, never “hey, I help businesses grow.” Then follow up 3–5 times: most replies come after message 2 or 3, and almost nobody sends them. DMDroid handles the sending and follow-up from your account; you only show up when someone replies.',
  },
  {
    q: 'Are automated DMs safe for my account?',
    a: 'They are when they’re sent like a human. Every DMDroid account runs in its own isolated browser session with daily rate caps, sending windows, and heartbeat monitoring that flags anomalies early. No shared fingerprints, no blasting. That’s what keeps accounts standing while volume goes up.',
  },
  {
    q: 'Does DMDroid auto-reply to incoming DMs?',
    a: 'No — and that’s deliberate. Autoresponders answer people who already messaged you. DMDroid does the harder job: outbound outreach and follow-up sequences that create those conversations in the first place. When someone replies, their sequence stops automatically and they land in your pipeline for a human conversation.',
  },
  {
    q: 'How many DMs can I send per day without getting flagged?',
    a: 'There’s no official number, which is exactly why people get burned guessing. DMDroid enforces daily rate caps, sending windows, and minimum spacing between messages per account — and spreads volume across your connected accounts instead of hammering from one. You set the campaign; the droid stays under the radar for you.',
  },
  {
    q: 'What is cold DM outreach?',
    a: 'Reaching out to people who haven’t heard of you yet — by DM. Instead of copy-pasting openers by hand, you build the sequence once (opener + follow-ups with A/B variants) and DMDroid personalizes and sends each message, handles timing and rate limits, and routes replies into your pipeline: DM’d → Initiated → Engaged → Calendly → Booked.',
  },
  {
    q: 'Do I need to keep my computer on?',
    a: 'Yes — DMDroid runs on your machine, so your PC needs to stay on while campaigns are sending. Two alternatives: run it on a VPS for true 24/7, or use Done-For-You, where we host and run everything and you just reply when prospects respond.',
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
    a: 'Solo Operator is $69/mo for one account. Agency starts at $106/mo for 2–30 accounts with volume discounts. Done-For-You is custom: we host and run everything — RDP, proxies, campaign setup and management — you just reply when prospects respond.',
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
        { label: 'How it works', href: '/#how' },
        { label: 'Pricing', href: '/#pricing' },
        { label: 'FAQ', href: '/#faq' },
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
