import { useEffect, useState, useRef } from 'react'

function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

const BOOKING_URL = 'https://api.leadconnectorhq.com/widget/booking/5igAcLbQXggi0w2WUWcc'

function DemoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [open, onClose])
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a demo"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between shrink-0 px-4 py-3 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Schedule a Demo</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 min-h-0 flex flex-col">
          <iframe
            src={BOOKING_URL}
            title="Schedule a Demo"
            className="w-full flex-1 min-h-[70vh] border-0"
          />
        </div>
      </div>
    </div>
  )
}

function Header({ onOpenDemoModal }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-black shadow-sm' : 'bg-black'
      }`}
    >
      <nav className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center">
          <img src="/logo.png" alt="Lawbric" className="h-12" />
        </a>
        <div className="flex items-center gap-4">
          <a href="#problem" className="hidden text-gray-300 hover:text-white sm:inline">
            Challenges
          </a>
          <a href="#features" className="hidden text-gray-300 hover:text-white sm:inline">
            Features
          </a>
          <a href="#deploy" className="hidden text-gray-300 hover:text-white sm:inline">
            How It Works
          </a>
          <a href="#faq" className="hidden text-gray-300 hover:text-white sm:inline">
            FAQ
          </a>
          <button
            type="button"
            onClick={onOpenDemoModal}
            className="rounded-lg bg-lawbric-blue px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-lawbric-blue-dark"
          >
            Schedule a Demo
          </button>
        </div>
      </nav>
    </header>
  )
}

function Hero({ onOpenDemoModal }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24 lg:pb-28"
    >
      {/* Sonar-like rings */}
      <svg className="absolute left-1/2 top-1/2 h-[180vmax] w-[180vmax] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
          <circle
            key={i}
            cx="50%"
            cy="50%"
            r={`${6 + i * 7}%`}
            fill="none"
            stroke="rgba(2, 132, 199, 0.45)"
            strokeWidth="1.5"
          />
        ))}
      </svg>
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="animate-fade-in-up text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          AI for Law Firms.{' '}
          <span className="text-lawbric-blue">Not Generic Businesses.</span>
        </h1>
        <p className="animate-fade-in-up mt-6 max-w-2xl mx-auto text-lg text-gray-300 sm:text-xl [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
          Lawbric delivers AI voice agents, intelligent chatbots, and automated
          intake systems designed specifically for modern law practices.
        </p>
        <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          <a
            href="tel:+19049002319"
            className="w-full rounded-lg bg-lawbric-blue px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-lawbric-blue-dark sm:w-auto"
          >
            See It In Action
          </a>
          <button
            type="button"
            onClick={onOpenDemoModal}
            className="w-full rounded-lg bg-gray-accent px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-gray-600 sm:w-auto"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  )
}

const challengeIcons = {
  clock: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  chat: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  ),
  clipboard: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  ),
  followUp: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  ),
  gear: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </>
  ),
  convert: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 18L9 11.25l4.306 4.235a11.95 11.95 0 0118.182-1.022L22 18M2.25 18v-6m0-6v6h6m-6-6h6" />
  ),
}

const keyChallenges = [
  {
    title: 'Missed Calls After Hours',
    icon: 'clock',
    description: 'Potential clients call when the office is closed, and no one is available to answer or qualify leads. Competitors may pick up and convert these clients instead.',
  },
  {
    title: 'Slow Response Times',
    icon: 'chat',
    description: 'Manual follow-ups take hours or days. Leads grow cold while waiting for a response, even though clients expect instant answers and accessibility.',
  },
  {
    title: 'Administrative Bottlenecks',
    icon: 'clipboard',
    description: 'Staff spends hours on intake forms, scheduling, and follow-ups. Important details can get lost in emails or voicemail, and overworked teams struggle to keep up with client demand.',
  },
  {
    title: 'Inconsistent Follow-Ups',
    icon: 'followUp',
    description: 'Some leads fall through the cracks and prospective clients never hear back. Reputation suffers from delayed communication.',
  },
  {
    title: 'Complex Intake & Workflows',
    icon: 'gear',
    description: 'Managing forms, documents, and scheduling across multiple attorneys is confusing. Data entry errors slow down case processing, and valuable time is wasted on repetitive, non-billable tasks.',
  },
  {
    title: 'Difficulty Converting Leads',
    icon: 'convert',
    description: 'Even after contact, many leads don’t schedule consultations. Tracking which leads are hot or cold is time-consuming, and lack of automated nurturing leads to lost revenue.',
  },
]

function Problem() {
  const { ref, visible } = useFadeIn()
  return (
    <section id="problem" ref={ref} className={`bg-gray-bg-soft px-4 py-16 transition-all duration-700 sm:px-6 lg:px-8 lg:py-24 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="inline-block rounded-full border border-gray-300 px-4 py-1.5 text-center text-gray-accent">Real Challenges</p>
          <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl lg:text-4xl">
            Why Many Law Firms Struggle to Capture Clients
          </h2>
          <p className="mt-4 max-w-5xl mx-auto text-base text-gray-accent sm:text-lg">
            Every challenge above is a barrier to growing your firm efficiently. That’s why Lawbric AI was built specifically for law firms – to handle calls, chats, intake, and workflows automatically, so your team can focus on practicing law, not chasing leads.
          </p>
        </div>
        <div className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:snap-none sm:overflow-visible lg:grid-cols-3 lg:gap-8 [-webkit-overflow-scrolling:touch]">
          {keyChallenges.map((challenge, i) => (
            <div
              key={i}
              className={`flex min-h-0 min-w-[85vw] flex-col snap-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-[1.02] hover:border-lawbric-blue hover:shadow-md sm:min-w-0 ${visible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-8 translate-y-4'}`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-lawbric-blue/10 text-lawbric-blue">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {challengeIcons[challenge.icon]}
                </svg>
              </div>
              <h3 className="mt-4 shrink-0 font-semibold text-gray-dark">
                {challenge.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-text">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const solutionFeatures = [
  {
    title: 'AI Voice Receptionist',
    description:
      'Automated 24/7 answering—sounds human, qualifies leads, and books appointments.',
    icon: (
      <path d="M12 2a4 4 0 0 1 4 4v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V6a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v1h4V6a2 2 0 0 0-2-2zm-1 7a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1zm2 0a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1zm-4 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5a4 4 0 0 1-8 0v-5z" />
    ),
  },
  {
    title: 'AI Chatbot',
    description:
      'Automated engagement: answers practice-area questions, captures contacts, and schedules consultations instantly.',
    icon: (
      <path d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v2a1 1 0 0 0 1.5.87l3-1.5 3 1.5A1 1 0 0 0 18 18v-2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4zm0 2h12v8h-3.5l-2.25 1.12L8.5 14H4V6z" />
    ),
  },
  {
    title: 'Client Intake Automation',
    description:
      'Automated intake with smart forms, follow-ups, CRM sync, and document collection.',
    icon: (
      <path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V4a2 2 0 0 0-2-2H4zm0 2h6v2H4V6zm0 4h12v10H4V12zm2 2v6h8v-6H6z" />
    ),
  },
  {
    title: 'Firm Workflow Automation',
    description:
      'Automated internal routing, case updates, appointment reminders, and lead tracking.',
    icon: (
      <path d="M4 4a2 2 0 0 0-2 2v2h2V6H4zm0 4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8H4zm2 2h12v6H6v-6zm4 2v2h4v-2h-4zM2 10h2v2H2v-2zm0 4h2v2H2v-2zm0 4h2v2H2v-2z" />
    ),
  },
]

function Solution() {
  const { ref, visible } = useFadeIn()
  return (
    <section id="features" ref={ref} className={`bg-gray-dark px-4 py-16 transition-all duration-700 sm:px-6 lg:px-8 lg:py-24 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="inline-block rounded-full border border-gray-400 px-4 py-1.5 text-gray-300">Meet Lawbric AI</p>
          <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            A Complete AI Solution for Law Firms
          </h2>
          <p className="mt-4 text-center text-lg text-gray-300 max-w-4xl mx-auto sm:whitespace-nowrap">
            Unified automation for intake, scheduling, follow-ups, and client care — ready to deploy.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutionFeatures.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-500 bg-transparent p-6 shadow-sm transition-all duration-300 hover:-rotate-1 hover:scale-[1.02] hover:border-lawbric-blue hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-lawbric-blue/10 text-lawbric-blue">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const deploySteps = [
  {
    num: '1',
    title: 'Connect Your Firm',
    bullets: [
      'Easily link your phone system, website, and CRM',
      'Integrate calendars and case management tools in minutes',
      'No coding required — designed for law firms of any size',
    ],
    benefit: 'Your existing systems work seamlessly with Lawbric, so setup is quick and painless.',
  },
  {
    num: '2',
    title: 'Customize Your AI Agents',
    bullets: [
      'Configure call scripts, chatbot flows, and intake forms specific to your practice areas',
      'Set preferences for lead qualification, scheduling rules, and follow-ups',
      'Test the AI agent before going live to ensure it matches your firm\'s voice',
    ],
    benefit: 'Your AI agent behaves exactly like your team would, maintaining a professional, client-friendly experience.',
  },
  {
    num: '3',
    title: 'Capture & Convert Leads Automatically',
    bullets: [
      'Lawbric answers calls, engages website visitors, and qualifies leads 24/7',
      'Appointments are booked directly on your calendar',
      'Follow-ups, reminders, and workflows are automated, reducing administrative burden',
    ],
    benefit: 'Never miss a client, save time, and increase revenue without adding staff.',
  },
]

function DeploySteps() {
  const { ref, visible } = useFadeIn()
  return (
    <section id="deploy" ref={ref} className={`bg-gray-bg px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8 lg:pt-32 lg:pb-24 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* First column: heading, subheading, body text */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl lg:text-4xl">
              From Setup to Fully Automated Client Engagement — Fast, Easy, Turnkey
            </h2>
            <p className="mt-4 text-gray-text leading-relaxed">
              Lawbric is designed to get your law firm up and running quickly, handling calls, chats, and client workflows automatically with minimal effort. Simply link your existing systems, customize your AI agents to match your firm’s voice and practice areas, and start capturing leads immediately — no coding, no IT headaches, and no complex integrations.
            </p>
            <p className="mt-4 text-gray-text leading-relaxed">
              Everything is unified and turnkey, so your firm can focus on practicing law while Lawbric works in the background to engage clients, qualify leads, and schedule appointments 24/7.
            </p>
            <a
              href="https://api.leadconnectorhq.com/widget/form/isLG6uqGeavaCa0Lpqb3"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-lawbric-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-lawbric-blue-dark"
            >
              Learn More
            </a>
          </div>
          {/* Second column: 3 steps — badge at top of each row, full-height line behind */}
          <div className="space-y-0">
            {deploySteps.map((step, i) => (
              <div key={i} className="flex gap-6 items-stretch">
                <div className="relative flex w-12 shrink-0 flex-col items-center">
                  <div
                    className={`absolute left-1/2 w-0.5 -translate-x-1/2 bg-lawbric-blue/50 ${i === deploySteps.length - 1 ? 'top-0 h-6' : 'top-0 bottom-0'}`}
                    aria-hidden="true"
                  />
                  <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lawbric-blue text-lg font-bold text-white transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}>
                    {step.num}
                  </div>
                  <div className="flex-1 min-h-2 w-full" />
                </div>
                <div className={`flex-1 min-w-0 pb-10 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}>
                  <h3 className="text-lg font-semibold text-gray-dark">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-text leading-relaxed">
                    {step.bullets.join(' ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DemoSection() {
  const { ref, visible } = useFadeIn()
  return (
    <section id="see-lawbric" ref={ref} className={`relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-32 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      {/* Sonar-like rings - full section (set 1, 45°) */}
      <svg className="absolute left-1/2 top-1/2 h-[180vmax] w-[180vmax] -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-70" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
          <circle
            key={i}
            cx="50%"
            cy="50%"
            r={`${6 + i * 7}%`}
            fill="none"
            stroke="rgba(229, 231, 235, 0.5)"
            strokeWidth="1.5"
          />
        ))}
      </svg>
      {/* Sonar-like rings - set 2 (0°) */}
      <svg className="absolute left-1/2 top-1/2 h-[180vmax] w-[180vmax] -translate-x-1/2 -translate-y-1/2 opacity-70" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
          <circle
            key={i}
            cx="50%"
            cy="50%"
            r={`${6 + i * 7}%`}
            fill="none"
            stroke="rgba(229, 231, 235, 0.5)"
            strokeWidth="1.5"
          />
        ))}
      </svg>
      {/* Sonar-like rings - set 3 (90°) */}
      <svg className="absolute left-1/2 top-1/2 h-[180vmax] w-[180vmax] -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-70" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
          <circle
            key={i}
            cx="50%"
            cy="50%"
            r={`${6 + i * 7}%`}
            fill="none"
            stroke="rgba(229, 231, 235, 0.5)"
            strokeWidth="1.5"
          />
        ))}
      </svg>
      {/* Sonar-like rings - set 4 (135°) */}
      <svg className="absolute left-1/2 top-1/2 h-[180vmax] w-[180vmax] -translate-x-1/2 -translate-y-1/2 rotate-[135deg] opacity-70" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
          <circle
            key={i}
            cx="50%"
            cy="50%"
            r={`${6 + i * 7}%`}
            fill="none"
            stroke="rgba(229, 231, 235, 0.5)"
            strokeWidth="1.5"
          />
        ))}
      </svg>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-dark sm:text-4xl lg:text-5xl">
              See Lawbric In Action
            </h2>
            <p className="mt-5 text-xl text-gray-accent">
              Experience how AI can handle your calls, chats, and intake—so you can focus on practicing law.
            </p>
            <p className="mt-5 text-lg text-gray-text">
              Try our AI receptionist and chatbot yourself. See how Lawbric qualifies leads, answers practice-area questions, and books consultations—all without lifting a finger.
            </p>
            <a
href="tel:+19049002319"
            className="mt-10 inline-block rounded-lg bg-lawbric-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-lawbric-blue-dark"
            >
              Try Our Demo
            </a>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-200 lg:aspect-[4/3]">
            <div className="absolute inset-0 flex items-center justify-center text-center text-sm text-gray-accent">
              Add lawyers.jpg to the public folder
            </div>
            <img
              src="/lawyers.jpg"
              alt="Lawyers using Lawbric"
              className="relative h-full w-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const faqItems = [
  {
    question: 'What is Lawbric?',
    answer: 'Lawbric is an AI platform built specifically for law firms. It includes an AI voice receptionist, intelligent chatbots, client intake automation, appointment scheduling, and internal workflow tools—all designed to help firms capture more leads and run operations efficiently.',
  },
  {
    question: 'How does the AI voice receptionist work?',
    answer: 'Our AI receptionist answers calls 24/7, sounds natural and human, qualifies leads by asking the right questions, and can book consultations directly into your calendar. You can customize scripts and behavior for your practice area.',
  },
  {
    question: 'Can Lawbric integrate with our existing CRM?',
    answer: 'Yes. Lawbric is designed to integrate with popular CRMs and practice management tools so that leads, contacts, and intake data flow seamlessly into your existing systems.',
  },
  {
    question: 'Is Lawbric suitable for solo practitioners?',
    answer: 'Absolutely. Lawbric works for solo attorneys, small firms, and multi-attorney practices. You can scale usage and features to match the size of your firm.',
  },
  {
    question: 'How do you ensure compliance and confidentiality?',
    answer: 'We build compliance-aware workflows and take data security seriously. Our systems are designed with legal practice requirements in mind, and we can discuss specific compliance needs for your jurisdiction.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide onboarding, training, and ongoing support so your team can get the most out of Lawbric. You’ll have a dedicated point of contact for setup and any questions.',
  },
  {
    question: 'How quickly can we get started?',
    answer: 'Most firms can be up and running within a few days to a couple of weeks, depending on customization. We’ll work with you to define your scripts, integrations, and go-live timeline.',
  },
  {
    question: 'Can we customize the AI for our practice area?',
    answer: 'Yes. Lawbric supports practice-area customization, legal-focused scripting, and workflows tailored to your firm so the AI speaks and acts in line with your practice.',
  },
  {
    question: 'What happens when the AI can’t answer a question?',
    answer: 'The AI is trained to recognize when to hand off to a human. Calls and chats can be escalated to your team, and you can set rules for when and how that happens.',
  },
  {
    question: 'How does pricing work?',
    answer: 'Pricing is based on your firm’s size and the features you use. Contact us for a demo and a tailored quote so we can match a plan to your needs.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const { ref, visible } = useFadeIn()

  return (
    <section id="faq" ref={ref} className={`bg-white px-4 py-16 transition-all duration-700 sm:px-6 lg:px-8 lg:py-24 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="inline-block rounded-full border border-gray-300 px-4 py-1.5 text-gray-accent">Got Questions?</p>
          <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-base text-gray-accent sm:text-lg">
            Answers to the most common questions law firms ask about implementing AI receptionists, chatbots, and client intake automation.
          </p>
        </div>
        <div className="mt-8 pt-2 sm:mt-10 sm:pt-4">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="overflow-hidden border-b border-gray-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg font-normal text-gray-dark transition hover:text-lawbric-blue sm:text-xl"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="h-5 w-5 text-gray-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-gray-text">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FinalCTA({ onOpenDemoModal }) {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-gray-dark px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Sonar-like rings - CTA */}
      <svg className="absolute left-1/2 top-1/2 h-[180vmax] w-[180vmax] -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-70" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
          <circle key={i} cx="50%" cy="50%" r={`${6 + i * 7}%`} fill="none" stroke="rgba(55, 65, 81, 0.5)" strokeWidth="1.5" />
        ))}
      </svg>
      <svg className="absolute left-1/2 top-1/2 h-[180vmax] w-[180vmax] -translate-x-1/2 -translate-y-1/2 opacity-70" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
          <circle key={i} cx="50%" cy="50%" r={`${6 + i * 7}%`} fill="none" stroke="rgba(55, 65, 81, 0.5)" strokeWidth="1.5" />
        ))}
      </svg>
      <svg className="absolute left-1/2 top-1/2 h-[180vmax] w-[180vmax] -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-70" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
          <circle key={i} cx="50%" cy="50%" r={`${6 + i * 7}%`} fill="none" stroke="rgba(55, 65, 81, 0.5)" strokeWidth="1.5" />
        ))}
      </svg>
      <svg className="absolute left-1/2 top-1/2 h-[180vmax] w-[180vmax] -translate-x-1/2 -translate-y-1/2 rotate-[135deg] opacity-70" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
          <circle key={i} cx="50%" cy="50%" r={`${6 + i * 7}%`} fill="none" stroke="rgba(55, 65, 81, 0.5)" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          See Our Legal Assistant In Action
        </h2>
        <p className="mt-6 text-lg text-gray-300">
          Call, chat, or interact with our legal assistant and experience how Lawbric
          captures and qualifies legal leads automatically.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+19049002319"
            className="animate-pulse-soft w-full rounded-lg bg-lawbric-blue px-6 py-3.5 text-base font-semibold text-white shadow-lg sm:w-auto"
          >
            Try Our Legal Assistant Now
          </a>
          <button
            type="button"
            onClick={onOpenDemoModal}
            className="w-full rounded-lg bg-gray-accent px-6 py-3.5 text-base font-semibold text-white transition hover:bg-gray-600 sm:w-auto"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer({ onOpenDemoModal }) {
  return (
    <footer className="bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <a href="#" className="flex items-center">
              <img src="/logo.png" alt="Lawbric" className="h-12" />
            </a>
            <p className="mt-2 text-xs text-gray-500">
              A platform developed by and powered by{' '}
              <a href="#" className="text-gray-400 hover:text-white">Foundry360</a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <a href="#hero" className="hover:text-white">Home</a>
            <a href="#features" className="hover:text-white">Features</a>
            <button type="button" onClick={onOpenDemoModal} className="hover:text-white bg-transparent border-0 cursor-pointer p-0 text-inherit font-inherit">Demo</button>
            <button type="button" onClick={onOpenDemoModal} className="hover:text-white bg-transparent border-0 cursor-pointer p-0 text-inherit font-inherit">Contact</button>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          © 2026 Lawbric. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const openDemoModal = () => setDemoModalOpen(true)
  const closeDemoModal = () => setDemoModalOpen(false)

  return (
    <>
      <Header onOpenDemoModal={openDemoModal} />
      <main>
        <Hero onOpenDemoModal={openDemoModal} />
        <Problem />
        <DemoSection />
        <Solution />
        <DeploySteps />
        <FAQ />
        <FinalCTA onOpenDemoModal={openDemoModal} />
      </main>
      <Footer onOpenDemoModal={openDemoModal} />
      <DemoModal open={demoModalOpen} onClose={closeDemoModal} />
    </>
  )
}
