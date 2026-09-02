import { ArrowDown, ArrowRight, Check } from 'lucide-react'
import { AUTH_URL, HERO, STATS } from '@/lib/landing-data'
import { Avatar } from './avatar'
import { Whisper } from './primitives'

/** The one entrance animation on the page — staggered 80ms apart. */
const rise = (step: number) => ({ animationDelay: `${step * 80}ms` })

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,#000,transparent_78%)]" />

      <div className="relative mx-auto max-w-content px-5 pb-15 pt-[128px] sm:px-6 md:pb-25 md:pt-[164px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div>
            <h1
              className="lp-rise text-balance text-[2.125rem] font-extrabold leading-[1.06] tracking-[-0.03em] sm:text-[3.25rem]"
              style={rise(0)}
            >
              Make Instagram your{' '}
              <span className="text-brand-bright">
                #1 client acquisition channel
              </span>
              .
            </h1>

            <p
              className="lp-rise mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/70"
              style={rise(1)}
            >
              {HERO.subhead}
            </p>

            {/* Mobile placement: below the subhead, smaller, centred. */}
            <div
              className="lp-rise mt-8 flex flex-col items-center gap-3 lg:hidden"
              style={rise(2)}
            >
              <Avatar
                pose="hero"
                size={350}
                className="h-[180px] w-[180px]"
                priority
              />
              <Whisper tone="dark" className="text-center">
                {HERO.whisper}
              </Whisper>
            </div>

            <div
              className="lp-rise mt-8 flex flex-col gap-3 sm:flex-row"
              style={rise(3)}
            >
              <a
                href={AUTH_URL}
                className="group flex h-12 items-center justify-center gap-2 rounded-[6px] bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-bright"
              >
                Start free trial
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
              <a
                href="#how"
                className="flex h-12 items-center justify-center gap-2 rounded-[6px] border border-white/20 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                See how it works
                <ArrowDown className="h-4 w-4" aria-hidden />
              </a>
            </div>

            <div
              className="lp-rise mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/55"
              style={rise(4)}
            >
              <span>{HERO.trial[0]}</span>
              <span className="h-3 w-px bg-white/20" aria-hidden />
              <span>{HERO.trial[1]}</span>
            </div>

            <ul
              className="lp-rise mt-6 flex flex-col gap-2 sm:flex-row sm:gap-6"
              style={rise(5)}
            >
              {HERO.pills.map((pill) => (
                <li
                  key={pill}
                  className="flex items-center gap-2 text-sm text-white/75"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-brand-bright"
                    aria-hidden
                  />
                  {pill}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop placement: floats right of the headline, no drop shadow. */}
          <div
            className="lp-rise hidden flex-col items-center gap-4 lg:flex"
            style={rise(6)}
          >
            <Avatar
              pose="hero"
              size={350}
              className="h-[320px] w-[320px]"
              priority
            />
            <Whisper tone="dark" className="text-center">
              {HERO.whisper}
            </Whisper>
          </div>
        </div>

        {/* Stats row — big number on top, supporting line below, hairline
            dividers between. No icons. */}
        <dl
          className="lp-rise mt-16 grid grid-cols-2 gap-y-8 border-t border-white/10 pt-10 md:grid-cols-4 md:gap-y-0"
          style={rise(7)}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-1 md:px-6 ${
                i === 0 ? 'md:pl-0' : 'md:border-l md:border-white/10'
              }`}
            >
              <dt className="text-2xl font-extrabold tracking-[-0.02em] text-white sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1.5 text-sm leading-snug text-white/60">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
