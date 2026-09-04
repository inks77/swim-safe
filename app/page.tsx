'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'

import logo from '@/public/swim-safe-logo.png'

const nav = [
  { label: 'The problem', href: '#problem' },
  { label: 'Our work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Training', href: '#training' },
  { label: 'Consultancy', href: '#consultancy' },
]

const record = [
  { figure: '16,027', unit: 'children reached' },
  { figure: '1,926', unit: 'community responders trained' },
  { figure: '1,124', unit: 'community lifesavers equipped' },
  { figure: '683', unit: 'lifeguards certified' },
]

const work = [
  {
    role: 'Prevention',
    title: 'Community water safety',
    text: 'Survival swimming, rescue and resuscitation skills taken into the fishing communities that carry the heaviest risk.',
  },
  {
    role: 'Instruction',
    title: 'Learn to swim',
    text: 'Structured swimming instruction for children, adults, schools and communities — taught to a standard, not a session.',
  },
  {
    role: 'Response',
    title: 'Lifeguard and rescue services',
    text: 'Trained, certified lifeguards for facilities, events, cruises and open water activity.',
  },
  {
    role: 'Standards',
    title: 'Training and certification',
    text: 'Internationally recognised lifeguard, first aid, CPR, AED and safety programmes for organisations.',
  },
]

const programmes = [
  'International Lifeguard Training Programme',
  'Comprehensive Aquatic Risk Management',
  'Water Safety Plus',
  'First aid, CPR and AED',
]

const involve = [
  {
    title: 'Give',
    text: 'Your support pays for training and equipment in the communities that carry the most risk.',
  },
  {
    title: 'Partner as a company',
    text: 'Fund a community programme, equip a landing site, or train your own staff to our standard.',
  },
  {
    title: 'Bring us to your community',
    text: 'Schools, churches, landing sites and groups can request a water safety programme.',
  },
]

const EMAIL = 'swimsafeuganda@gmail.com'

function Wordmark() {
  return (
    <>
      <Image className="brand-mark" src={logo} alt="" priority />
      <span>
        Swim Safe <em>Uganda</em>
      </span>
    </>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="header" data-scrolled={scrolled}>
        <div className="shell header-inner">
          <a href="#top" className="brand" aria-label="Swim Safe Uganda — home">
            <Wordmark />
          </a>

          <nav className="nav" aria-label="Main">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta link" href="#get-involved">
              Support our work <ArrowRight size={15} strokeWidth={2} />
            </a>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            aria-expanded={menuOpen}
          >
            <Menu size={22} strokeWidth={1.75} />
          </button>
        </div>
      </header>

      <div className="sheet" data-open={menuOpen} aria-hidden={!menuOpen} inert={!menuOpen || undefined}>
        <div className="sheet-head">
          <span className="brand">
            <Wordmark />
          </span>
          <button className="menu-toggle" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
            <X size={22} strokeWidth={1.75} />
          </button>
        </div>
        <nav className="sheet-links" aria-label="Main, mobile">
          {[...nav, { label: 'Get involved', href: '#get-involved' }].map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="sheet-foot">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href="tel:+256784580537">+256 784 580 537</a>
        </div>
      </div>

      <main id="top">
        {/* Hero — deep water, and the sentence the whole organisation exists for. */}
        <section className="hero on-deep">
          <div
            className="hero-media"
            role="img"
            aria-label="A Swim Safe Uganda instructor running a water safety session on Lake Victoria"
          />
          <div className="hero-scrim" />
          <div className="shell">
            <div className="hero-body">
              <p className="label" data-rise style={{ '--i': 0 } as React.CSSProperties}>
                Drowning prevention — Uganda — since 2011
              </p>
              <h1 className="display-xl" data-rise style={{ '--i': 1 } as React.CSSProperties}>
                Nobody should drown in water they use <span className="mark">every day</span>.
              </h1>
              <p className="lede" data-rise style={{ '--i': 2 } as React.CSSProperties}>
                We teach communities to prevent drowning, to respond when it happens, and to
                survive it.
              </p>
              <div className="hero-actions" data-rise style={{ '--i': 3 } as React.CSSProperties}>
                <a className="btn btn-solid" href="#get-involved">
                  Support our work <ArrowRight size={16} strokeWidth={2} />
                </a>
                <a className="link" href="#work">
                  See what we do <ArrowRight size={15} strokeWidth={2} />
                </a>
              </div>
            </div>
            <div className="waterline" data-rise style={{ '--i': 4 } as React.CSSProperties}>
              <span>Lake Victoria, Uganda</span>
              <span>Headquartered in Kampala</span>
              <span>Nine branches nationwide</span>
            </div>
          </div>
        </section>

        {/* The problem */}
        <section className="band" id="problem">
          <div className="shell spine">
            <p className="label">The problem</p>
            <div>
              <h2 className="display-l">
                Uganda loses thousands of people to drowning every year.
              </h2>
              <div className="problem-grid">
                <div className="prose">
                  <p>
                    Most of them are children and young men. Most drown close to shore, in
                    daylight, within reach of help. The water is not remote or exceptional — it is
                    the water people cross to get to school, and fish in to make a living.
                  </p>
                </div>
                <div>
                  <p className="pull">
                    Almost every one of these deaths could have been prevented by a skill that
                    takes days to teach, or a piece of equipment that costs less than a day of
                    fishing.
                  </p>
                  <a className="link" href="#about">
                    Why this work exists <ArrowRight size={15} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The record — figures set as a survey table, not tiles */}
        <section className="band band-tight" id="impact">
          <div className="shell spine">
            <p className="label">The record</p>
            <div>
              <h2 className="display-m">What the work has amounted to.</h2>
              <div className="record">
                {record.map((item) => (
                  <div className="record-item" key={item.unit}>
                    <strong>{item.figure}</strong>
                    <span>{item.unit}</span>
                  </div>
                ))}
              </div>
              <p className="record-note">Cumulative since 2011</p>
            </div>
          </div>
        </section>

        {/* Our work — four kinds of work, not four steps, so no numbering */}
        <section className="band band-ruled" id="work">
          <div className="shell">
            <div className="spine">
              <p className="label">Our work</p>
              <div>
                <h2 className="display-l">
                  We do not deliver water safety to communities. We build it{' '}
                  <span className="mark">with them</span>.
                </h2>
              </div>
            </div>
            <div className="index">
              {work.map((item) => (
                <a className="index-row" href="#contact" key={item.title}>
                  <span className="label">{item.role}</span>
                  <span className="index-copy">
                    <span className="display-s">{item.title}</span>
                    <p>{item.text}</p>
                  </span>
                  <ArrowUpRight className="chevron" size={20} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="band about" id="about">
          <div className="shell spine">
            <p className="label">About us</p>
            <div className="about-grid">
              <h2 className="display-m">
                Every programme is designed so that when we leave, the skill stays behind.
              </h2>
              <div>
                <div className="prose">
                  <p>
                    Swim Safe Uganda is a registered non-governmental organisation established in
                    2011 and headquartered in Kampala, with nine branches across the country.
                  </p>
                  <p>
                    We are a team of lifeguards, instructors, first responders and community
                    trainers. We work with communities rather than around them, and we measure the
                    work by what remains in local hands afterwards — not by how many sessions we
                    ran.
                  </p>
                  <a className="link" href="#contact">
                    Talk to our team <ArrowRight size={15} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training */}
        <section className="band band-ruled" id="training">
          <div className="shell spine">
            <p className="label">Training</p>
            <div>
              <h2 className="display-l">
                Standards that hold <span className="mark">anywhere</span>.
              </h2>
              <div className="training-grid">
                <div className="prose">
                  <p>
                    We deliver globally recognised safety training at your site, or equip your
                    organisation to train independently through our train-the-trainer model.
                  </p>
                  <a className="btn btn-outline" href="#contact">
                    Train your team <ArrowRight size={16} strokeWidth={2} />
                  </a>
                </div>
                <div>
                  <div className="programmes">
                    {programmes.map((name) => (
                      <a href="#contact" key={name}>
                        {name}
                        <ArrowUpRight size={18} strokeWidth={1.75} />
                      </a>
                    ))}
                  </div>
                  <p className="programmes-note">Delivered on site, or as train-the-trainer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultancy */}
        <section className="band band-deep" id="consultancy">
          <div className="shell spine">
            <p className="label">Consultancy</p>
            <div>
              <h2 className="display-l">
                If water is part of your operation, it is part of your{' '}
                <span className="mark">liability</span>.
              </h2>
              <div className="consultancy-grid">
                <div className="prose">
                  <p>
                    We help you understand exactly where you stand and what to do about it — from
                    facility design review and staffing ratios to emergency action plans your team
                    can actually run under pressure.
                  </p>
                </div>
                <div>
                  <a className="link" href="#contact">
                    Make your operation safer <ArrowRight size={15} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get involved — three genuinely separate choices */}
        <section className="band band-ruled" id="get-involved">
          <div className="shell">
            <div className="spine">
              <p className="label">Get involved</p>
              <h2 className="display-l">
                Put safety in the hands of the people who need it most.
              </h2>
            </div>
            <div className="involve">
              {involve.map((item) => (
                <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(item.title)}`} key={item.title}>
                  <span className="display-s">{item.title}</span>
                  <p>{item.text}</p>
                  <ArrowRight className="arrow" size={18} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer on-deep" id="contact">
        <div className="shell">
          <div className="footer-grid">
            <div>
              <a href="#top" className="brand">
                <Wordmark />
              </a>
              <p className="footer-blurb">
                Enhancing safety in, on and around water through education, prevention and rescue.
              </p>
              <p className="footer-flagnote">
                <span className="flag" aria-hidden="true" />
                Red over yellow marks water under lifeguard patrol — the safest place on any
                shoreline, and the shortest way to say what we are here to build.
              </p>
            </div>

            <div className="footer-col">
              <span className="label">Start a conversation</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href="tel:+256784580537">+256 784 580 537</a>
              <a href="tel:+256752209938">+256 752 209 938</a>
            </div>

            <div className="footer-col">
              <span className="label">Find us</span>
              <p>Kampala, Uganda</p>
              <p>Nine branches nationwide</p>
              <a href="#top">swimsafeug.org</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Swim Safe Uganda</span>
            <span>Water safety is a right, not a privilege</span>
          </div>
        </div>
      </footer>
    </>
  )
}
