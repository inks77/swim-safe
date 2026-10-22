'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const nav = [
  { label: 'Drowning', href: '#problem' },
  { label: 'Who we are', href: '#about' },
  { label: 'What we do', href: '#work' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
]

const EMAIL = 'swimsafeuganda@gmail.com'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className="header" data-scrolled={scrolled}>
        <div className="shell header-inner">
          <a href="#top" className="brand" aria-label="Swim Safe Uganda home"><span className="brand-dot" aria-hidden="true" /><span>Swim Safe <em>Uganda</em></span></a>
          <nav className="nav" aria-label="Main navigation">{nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu size={22} /></button>
        </div>
      </header>

      <div className="sheet" data-open={menuOpen} aria-hidden={!menuOpen} inert={!menuOpen || undefined}>
        <div className="sheet-head"><span className="brand"><span className="brand-dot" aria-hidden="true" />Swim Safe <em>Uganda</em></span><button className="menu-toggle" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X size={22} /></button></div>
        <nav className="sheet-links" aria-label="Mobile navigation">{nav.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>
        <div className="sheet-foot"><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href="tel:+256752209938">+256 752 209 938</a></div>
      </div>

      <main id="top">
        <section className="hero presentation-hero on-deep">
          <div className="hero-scrim" />
          <div className="shell hero-content"><p className="label">Swim Safe Uganda</p><h1 className="display-xl">Saving lives in, on and around water.</h1><p className="lede">A presentation-led story about drowning prevention, water safety and community action in Uganda.</p><a className="btn btn-solid" href="#problem">Begin the story <ArrowRight size={16} /></a></div>
        </section>

        <section className="presentation-section" id="problem"><div className="shell"><p className="label">01 / The problem</p><h2 className="display-l">Drowning — a silent epidemic in Uganda</h2><p className="wide-copy">Drowning is a serious and under-recognised public health problem in Uganda. While the global drowning mortality rate is about 3.8 deaths per 100,000 people, studies in Uganda&apos;s lakeside fishing communities have reported rates exceeding 500 deaths per 100,000 — more than 100 times the global rate. With millions of people depending on lakes and rivers for transport and livelihoods, stronger water-safety measures, life-jacket use, safer boats and faster emergency response are urgently needed to save lives.</p></div></section>

        <section className="presentation-section soft"><div className="shell"><p className="label">02 / Understanding risk</p><h2 className="display-l">Risk factors for drowning in Uganda</h2><div className="risk-grid"><div><h3>Age and gender</h3><p>Most victims are young males, with 85% of fatalities occurring in this demographic.</p></div><div><h3>Access to water</h3><p>Proximity to lakes and rivers increases risk, especially in lakeside districts.</p></div><div><h3>Swimming skills</h3><p>Poor swimming abilities are common and contribute to higher drowning rates.</p></div><div><h3>Alcohol consumption</h3><p>Water activities while under the influence increase risk.</p></div><div><h3>Unsafe water transport</h3><p>Many victims are involved in poorly managed boating activities with inexperienced operators.</p></div><div><h3>Lack of safety measures</h3><p>Absence of life jackets and supervision, particularly for children, increases danger.</p></div></div></div></section>

        <section className="presentation-section" id="about"><div className="shell"><p className="label">03 / Who we are</p><h2 className="display-l">Swim Safe Uganda: Who we are</h2><div className="prose"><p><strong>Main goal:</strong> Mobilize communities to participate in creating water safety and drowning prevention in Uganda.</p><p><strong>Mission:</strong> Save lives in, on and around water through education, prevention and responding to emergencies in Uganda.</p><p><strong>Vision:</strong> To be the lead partner for steering Uganda into the lower-quartile for drowning globally.</p></div></div></section>

        <section className="presentation-section soft" id="work"><div className="shell"><p className="label">04 / What we do</p><h2 className="display-l">Community water safety education and outreach programmes</h2><p>We deliver outreach programmes to equip communities and target groups with essential knowledge of water safety.</p><ul className="presentation-list"><li>Basic swimming, rescue and resuscitation skills.</li><li>Work across 10 locations: Buvuma Island, Lake Bunyonyi, Kalangala, Kasensero, Entebbe, Buliisa, Jinja, Kabale, Rubanda, Namayingo and Mayuge.</li><li><strong>Governance and coordination:</strong> National and district coordination connecting the central Swim Safe Uganda team with district branches, lifeguards and community responders to strengthen local preparedness and emergency response.</li><li><strong>Evidence:</strong> Research, monitoring, evaluation and learning that help us understand drowning, track impact and improve water-safety programmes across Uganda.</li></ul></div></section>

        <section className="presentation-section"><div className="shell"><p className="label">05 / Lifeguard training</p><h2 className="display-l">Lifeguard training</h2><p>We provide international standard training and accreditation to lifeguards employed by schools and public pools, beach resorts and hotel operators.</p><ul className="presentation-list"><li>Basic rescue and drowning prevention</li><li>Pool management</li><li>Interpreting signs of drowning and distress</li></ul></div></section>

        <section className="presentation-section soft"><div className="shell"><p className="label">06 / Learn to swim</p><h2 className="display-l">Water safety and Learn to Swim programmes</h2><p className="lede dark">Every child should have access to quality and safe swim lessons.</p><p>We teach in-school children swimming and water safety skills, making use of pools, lakes, rivers and ponds, while creating a network of certified swim teachers across the country.</p></div></section>

        <section className="presentation-section"><div className="shell"><p className="label">07 / Survival swimming education</p><h2 className="display-l">Survival swimming education</h2><p>We teach essential survival techniques on water for self-preservation, use of lifejackets and other flotation devices, and basic rescue techniques for at-risk groups such as fishermen and boat operators.</p><p>Education is conducted through media, community meetings and public awareness education.</p></div></section>

        <section className="presentation-section soft"><div className="shell"><p className="label">08 / Water safety advocacy</p><h2 className="display-l">Water safety advocacy and awareness</h2><p>We use media, radio and community engagement to keep water safety visible and encourage safer behaviour around Uganda&apos;s lakes, rivers and pools.</p><ul className="presentation-list"><li>Media engagement through newspapers, television and radio stations</li><li>Community meetings</li><li>Public awareness education</li></ul></div></section>

        <section className="presentation-section"><div className="shell"><p className="label">09 / Research and validation</p><h2 className="display-l">Research and validation</h2><p className="wide-copy">We work with key national and international organisations to ensure SSU and Uganda are adopting international best practice for water safety, and measuring to ensure that SSU&apos;s programmes are effective.</p><p>Previous projects included:</p><ul className="presentation-list"><li>Development of lifeguard&apos;s curriculum</li><li>Promotion of inclusion of water safety education into schools&apos; curriculum</li><li>Development of national aquatic signage standards</li><li>Drowning prevention research and collaboration, including assessment of drowning prevention interventions in Mayuge district.</li></ul></div></section>

        <section className="presentation-section"><div className="shell"><p className="label">10 / Collaborations and partnerships</p><h2 className="display-l">Collaborations and partnerships</h2><p>SSU engages with government departments and expert water safety, rescue, NGO and international service organisations.</p><ul className="presentation-list"><li>Ministry of Health</li><li>Ministry of Education and Sports</li><li>Uganda Police Force and Marine Police</li><li>Ministry of Water</li><li>Makerere University School of Public Health</li><li>Uganda Civil Aviation Authority</li><li>Uganda Aquatics, Uganda Lifesaving Federation and Red Cross</li><li>Emergency Care Society of Uganda and Association of Ambulance Professionals Uganda</li><li>Uganda Hotel Owners Association and Uganda Scouts Association</li></ul><p className="wide-copy"><strong>Partnerships are active:</strong> MOUs have been signed, and others are in the process of being signed with several collaboration partners.</p></div></section>

        <section className="presentation-section soft" id="impact"><div className="shell"><p className="label">11 / Key achievements</p><h2 className="display-l">Key achievements</h2><ul className="presentation-list"><li><strong>1,907</strong> community first aquatic responders</li><li><strong>16,000</strong> children trained in water safety and survival swimming</li><li>Over <strong>1,100</strong> lifesavers trained all over Uganda</li><li><strong>142</strong> swim instructors</li><li><strong>3,388</strong> children, parents and teachers trained in water safety</li><li><strong>610</strong> SSU ambassadors for water safety across Uganda</li><li>Established <strong>9</strong> community-based water safety branches</li><li>Established Uganda National Drowning Prevention Steering Committee</li></ul></div></section>

        <section className="presentation-section"><div className="shell"><p className="label">12 / Areas of growth</p><h2 className="display-l">Areas of growth and funding needs</h2><ul className="presentation-list growth-list"><li>Technical support</li><li>Support and resources for water safety and Learn to Swim projects in lakeside districts</li><li>Support in evidence generation on the effectiveness of implemented interventions and high-quality research and monitoring</li><li>Expand outreach to all high-risk lake districts</li><li>Launch the first national school-based water safety curriculum and produce educational materials and lifejacket distribution</li><li>Host the first East Africa Water Safety Summit</li></ul></div></section>

        <section className="presentation-section soft"><div className="shell"><p className="label">13 / Meet our team</p><h2 className="display-l">Meet our team</h2><p>SSU is guided by a committed team bringing together executive leadership, finance, legal advice, research and project coordination.</p><ul className="presentation-list"><li>Moses Kalanzi — Executive Director</li><li>Mbabazi Max — Finance Officer</li><li>Jane Francis Nanvuma — Legal Adviser</li><li>Claire Biribawa — Research Lead</li><li>Tumuhimbise Peninah — Project Coordinator</li></ul></div></section>

        <section className="quote-section"><div className="shell"><span className="quote-mark">“</span><blockquote>You won&apos;t die if you do not know how to play football, but you can die if you do not know how to swim.</blockquote><cite>— Moses Kalanzi</cite></div></section>
      </main>

      <footer className="footer on-deep" id="contact"><div className="shell footer-contact"><p className="label">12 / Contact us</p><h2 className="display-l">Contact us</h2><div className="contact-lines"><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href="tel:+256752209938">Tel: +256 752 209 938</a><span>Facebook: Swim Safe Uganda</span><a href="https://www.swimsafeug.org">Website: www.swimsafeug.org</a></div></div></footer>
    </>
  )
}
