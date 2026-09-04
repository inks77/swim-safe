'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, HeartHandshake, LifeBuoy, Menu, Play, ShieldCheck, Waves, X } from 'lucide-react'

const navItems = ['About us', 'What we do', 'Training', 'Consultancy', 'Our impact', 'Get involved']

const impact = [
  ['16,027', 'children reached'],
  ['1,926', 'community responders trained'],
  ['1,124', 'community lifesavers equipped'],
  ['683', 'lifeguards certified'],
]

const services = [
  { icon: Waves, number: '01', title: 'Community water safety', text: 'We take survival swimming, rescue and resuscitation skills into the fishing communities that carry the heaviest risk.' },
  { icon: LifeBuoy, number: '02', title: 'Learn to swim', text: 'Structured, high quality swimming instruction for children, adults, schools and communities.' },
  { icon: ShieldCheck, number: '03', title: 'Lifeguard & rescue services', text: 'Trained, certified lifeguards for facilities, events, cruises and open water activity.' },
  { icon: HeartHandshake, number: '04', title: 'Training & certification', text: 'Internationally recognised lifeguard, first aid, CPR, AED and safety programmes for organisations.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" onClick={closeMenu} aria-label="Swim Safe Uganda home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span>Swim Safe <b>Uganda</b></span>
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Talk to us <ArrowRight size={16} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Lifeguard supporting water safety education in Uganda" />
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <p className="eyebrow light">Water safety is everyone&apos;s business</p>
          <h1>Nobody should drown in water they use <em>every day.</em></h1>
          <p className="hero-copy">We teach communities to prevent drowning, to respond when it happens, and to survive it.</p>
          <div className="hero-actions"><a className="button button-orange" href="#get-involved">Support our work <ArrowRight size={17} /></a><a className="text-link light-link" href="#what-we-do"><span className="play-icon"><Play size={13} fill="currentColor" /></span> See what we do</a></div>
        </div>
        <div className="hero-caption">Lake Victoria, Uganda <span>—</span> Where the work begins</div>
      </section>

      <section className="statement page-width">
        <div className="section-kicker">The problem</div>
        <div className="statement-grid"><h2>Uganda loses thousands of people to drowning every year.</h2><div><p>Most of them are children and young men. Most drown close to shore, in daylight, within reach of help.</p><p className="strong-copy">Almost every one of these deaths could have been prevented by a skill that takes days to teach or a piece of equipment that costs less than a day of fishing.</p><a className="text-link orange-link" href="#about-us">Why this work exists <ArrowRight size={16} /></a></div></div>
      </section>

      <section className="impact-strip" id="our-impact"><div className="page-width"><div className="impact-intro"><span className="section-kicker light">Our reach so far</span><p>We have been closing that gap since 2011.</p></div>{impact.map(([number, label]) => <div className="impact-item" key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></section>

      <section className="services page-width" id="what-we-do"><div className="section-heading"><div><span className="section-kicker">What we do</span><h2>Building safety <em>with</em> communities.</h2></div><p>Prevention before rescue. Skills that stay. We work with communities, not around them.</p></div><div className="service-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={title}><div className="service-top"><span>{number}</span><Icon size={25} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}><ArrowRight size={18} /></a></article>)}</div></section>

      <section className="about-band" id="about-us"><div className="page-width about-grid"><div><span className="section-kicker light">About Swim Safe Uganda</span><h2>We do not deliver water safety to communities. <em>We build it with them.</em></h2></div><div><p>Swim Safe Uganda is a registered non governmental organisation established in 2011 and headquartered in Kampala, with nine branches across the country.</p><p>We are a team of lifeguards, instructors, first responders and community trainers. Every programme is designed so that when we leave, the skill stays behind in the hands of the people who need it most.</p><a className="text-link light-link" href="#contact">Meet our approach <ArrowRight size={16} /></a></div></div></section>

      <section className="training page-width" id="training"><div className="training-copy"><span className="section-kicker">Training & certification</span><h2>Standards that hold <em>anywhere.</em></h2><p>We deliver globally recognised safety training at your site, or equip your organisation to train independently through our train the trainer model.</p><a className="button button-navy" href="#contact">Train your team <ArrowRight size={17} /></a></div><div className="training-list">{['International Lifeguard Training Programme', 'Comprehensive Aquatic Risk Management', 'Water Safety Plus', 'First aid, CPR and AED'].map((x, i) => <a href="#contact" key={x}><span>0{i + 1}</span>{x}<ChevronDown size={17} /></a>)}</div></section>

      <section className="consultancy" id="consultancy"><div className="page-width consultancy-inner"><span className="section-kicker light">Consultancy</span><h2>If water is part of your operation, it is part of your <em>liability.</em></h2><p>We help you understand exactly where you stand and what to do about it — from facility design review to emergency action plans.</p><a className="text-link light-link" href="#contact">Make your operation safer <ArrowRight size={16} /></a></div></section>

      <section className="get-involved page-width" id="get-involved"><div><span className="section-kicker">Get involved</span><h2>Put safety in the hands of the people who need it most.</h2></div><div className="involve-grid"><a href="mailto:swimsafeuganda@gmail.com"><span>Give</span><p>Your support pays for training and equipment in the communities that carry the most risk.</p><ArrowRight size={18} /></a><a href="mailto:swimsafeuganda@gmail.com"><span>Partner as a company</span><p>Fund a community programme, equip a landing site, or train your own staff.</p><ArrowRight size={18} /></a><a href="mailto:swimsafeuganda@gmail.com"><span>Bring us to your community</span><p>Schools, churches, landing sites and groups can request a water safety programme.</p><ArrowRight size={18} /></a></div></section>

      <footer id="contact"><div className="page-width footer-grid"><div><a href="#top" className="brand footer-brand"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span>Swim Safe <b>Uganda</b></span></a><p>Enhancing safety in, on and around water through education, prevention and rescue.</p></div><div><span className="footer-label">Start a conversation</span><a href="mailto:swimsafeuganda@gmail.com">swimsafeuganda@gmail.com</a><a href="tel:+256784580537">+256 784 580 537</a><a href="tel:+256752209938">+256 752 209 938</a></div><div><span className="footer-label">Find us</span><p>Kampala, Uganda</p><a href="#top">swimsafeug.org</a></div></div><div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Swim Safe Uganda</span><span>Water safety is a right, not a privilege.</span></div></footer>
    </main>
  )
}

