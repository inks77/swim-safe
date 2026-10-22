'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const nav = [
  { label: 'The problem', href: '#problem' },
  { label: 'Who we are', href: '#about' },
  { label: 'Our work', href: '#work' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
]

const images = {
  drowning: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2798-Irgs7gSsmMSRsMzPxYPCWH2LVTYiA5.jpg',
  risks: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2797-JYWpXx6nzB62Z1C1wVaSjGk3NjGXnh.jpg',
  outreach: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2799-TSCq0sBHVlAhZ5jlbZ8iVBGrKV0uj2.jpg',
  learn: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2800-MC3DJDdY4aDSTTHVQNcT4TKXjilhyJ.jpg',
  safety: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2801-8YFvhHknswz5BuMwkYgJMJRWs5wM4P.jpg',
  partners: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2802-p0Ftz41LhjtOVcHJ28QvkOe373KQBi.jpg',
  achievements: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2803-AQflZkYnWnnqv0r6VpQ8Z6NobGMeJl.jpg',
  team: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2804-Q4yOTrhPQdHQh0Lyd44pepWqtheNON.jpg',
}

const EMAIL = 'swimsafeuganda@gmail.com'

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return <img className="presentation-image" src={src} alt={alt} loading="lazy" />
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

  return (
    <>
      <header className="header" data-scrolled={scrolled}>
        <div className="shell header-inner">
          <a href="#top" className="brand" aria-label="Swim Safe Uganda home">
            <span className="brand-dot" aria-hidden="true" />
            <span>Swim Safe <em>Uganda</em></span>
          </a>
          <nav className="nav" aria-label="Main navigation">
            {nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
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
          <div className="hero-media" />
          <div className="hero-scrim" />
          <div className="shell hero-content">
            <p className="label">Swim Safe Uganda</p>
            <h1 className="display-xl">Saving lives in, on and around water.</h1>
            <p className="lede">Education, prevention and response for safer communities across Uganda.</p>
            <a className="btn btn-solid" href="#about">Discover our work <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="presentation-section" id="problem">
          <div className="shell presentation-grid"><div><p className="label">01 / The problem</p><h2 className="display-l">Drowning — a silent epidemic in Uganda</h2><ul className="presentation-list"><li>Uganda has 18% of its surface covered by water.</li><li>Approximately 1,000 drowning deaths occur each year.</li><li>Children, youth and fishermen are most at risk.</li></ul></div><SectionImage src={images.drowning} alt="Person in distress in deep water" /></div>
        </section>

        <section className="presentation-section soft" aria-labelledby="risk-title"><div className="shell"><p className="label">02 / Understanding risk</p><h2 className="display-l" id="risk-title">Risk factors for drowning in Uganda</h2><div className="risk-grid"><div><h3>Age and access</h3><p>Young males and people living near lakes and rivers face the greatest risk.</p></div><div><h3>Swimming skills</h3><p>Poor swimming ability and alcohol use increase the likelihood of drowning.</p></div><div><h3>Unsafe transport</h3><p>Inexperienced operators, lack of life jackets and limited supervision add danger.</p></div></div><SectionImage src={images.risks} alt="News story about swimming safety laws" /></div></section>

        <section className="presentation-section" id="about"><div className="shell presentation-grid reverse"><div><p className="label">03 / Who we are</p><h2 className="display-l">Swim Safe Uganda</h2><div className="prose"><p><strong>Main goal:</strong> Mobilize communities to participate in creating water safety and drowning prevention in Uganda.</p><p><strong>Mission:</strong> Save lives in, on and around water through education, prevention and responding to emergencies.</p><p><strong>Vision:</strong> To be the lead partner for steering Uganda into the lower-quartile for drowning globally.</p></div></div><SectionImage src={images.team} alt="Swim Safe Uganda team members" /></div></section>

        <section className="presentation-section soft" id="work"><div className="shell"><p className="label">04 / What we do</p><h2 className="display-l">Community water safety education and outreach</h2><div className="presentation-grid"><div className="prose"><p>We deliver outreach programmes to equip communities and target groups with essential knowledge of water safety.</p><ul className="presentation-list"><li>Basic swimming, rescue and resuscitation skills.</li><li>Programmes across 10 high-risk locations.</li></ul></div><SectionImage src={images.outreach} alt="Water safety training in a community" /></div></div></section>

        <section className="presentation-section"><div className="shell presentation-grid"><div><p className="label">05 / Learn to swim</p><h2 className="display-l">Water safety and Learn to Swim programmes</h2><p className="lede dark">Every child should have access to quality and safe swim lessons.</p><p>We teach in-school children swimming and water safety skills, using pools, lakes, rivers and ponds while creating a network of certified swim teachers across the country.</p></div><SectionImage src={images.learn} alt="Children learning water safety outdoors" /></div></section>

        <section className="presentation-section soft"><div className="shell presentation-grid reverse"><div><p className="label">06 / Lifeguard training</p><h2 className="display-l">Training that protects people at the water&apos;s edge</h2><p>We provide international standard training and accreditation to lifeguards employed by schools, public pools, beaches, resorts and hotels.</p><ul className="presentation-list"><li>Basic rescue and drowning prevention</li><li>Pool management</li><li>Interpreting signs of drowning and distress</li></ul></div><SectionImage src={images.safety} alt="Swim Safe Uganda water safety education session" /></div></section>

        <section className="presentation-section"><div className="shell"><p className="label">07 / Research and validation</p><h2 className="display-l">Evidence that makes water safety stronger</h2><p className="wide-copy">We work with national and international organisations to adopt international best practice for water safety and measure whether programmes are effective.</p><div className="achievement-row"><div><h3>Previous projects include</h3><ul className="presentation-list"><li>Development of lifeguard curriculum</li><li>Water safety education in schools</li><li>National aquatic signage standards</li><li>Drowning prevention research and collaboration</li></ul></div><SectionImage src={images.safety} alt="Swim training research fieldwork" /></div></div></section>

        <section className="presentation-section soft"><div className="shell"><p className="label">08 / Leadership and operational excellence</p><h2 className="display-l">A trusted national network</h2><p className="wide-copy">Our team includes 12 trained SSU instructors, 20 community instructors, 9 programme commissioners, and 1,124 branch members and ambassadors for water safety across Uganda.</p><SectionImage src={images.team} alt="Swim Safe Uganda team group photo" /></div></section>

        <section className="presentation-section"><div className="shell"><p className="label">09 / Collaborations and partnerships</p><h2 className="display-l">We are stronger together</h2><div className="presentation-grid"><ul className="presentation-list"><li>Ministry of Health</li><li>Ministry of Education and Sports</li><li>Uganda Police Force and Marine Police</li><li>Ministry of Water</li><li>Makerere University School of Public Health</li><li>Uganda Civil Aviation Authority</li><li>Red Cross and Uganda Lifesaving Federation</li></ul><SectionImage src={images.partners} alt="Swim Safe Uganda partnership event" /></div></div></section>

        <section className="presentation-section soft" id="impact"><div className="shell"><p className="label">10 / Key achievements</p><h2 className="display-l">Progress you can measure</h2><div className="record presentation-record"><div><strong>1,907</strong><span>community first aquatic responders</span></div><div><strong>16,000</strong><span>children trained in water safety</span></div><div><strong>1,100+</strong><span>lifesavers trained across Uganda</span></div><div><strong>9</strong><span>community-based water safety branches</span></div></div><SectionImage src={images.achievements} alt="Swim Safe Uganda programme achievements" /></div></section>

        <section className="presentation-section"><div className="shell"><p className="label">11 / Areas of growth</p><h2 className="display-l">Funding needs and next steps</h2><ul className="presentation-list growth-list"><li>Technical support</li><li>Resources for water safety and Learn to Swim projects in lakeside districts</li><li>Evidence generation, research and monitoring</li><li>Expand outreach to all high-risk lake districts</li><li>Launch a national school-based water safety curriculum</li><li>Host the first East Africa Water Safety Summit</li></ul></div></section>

        <section className="quote-section"><div className="shell"><span className="quote-mark">“</span><blockquote>You won&apos;t die if you do not know how to play football, but you can die if you do not know how to swim.</blockquote><cite>— Moses Kalanzi</cite></div></section>
      </main>

      <footer className="footer on-deep" id="contact"><div className="shell footer-contact"><p className="label">12 / Contact us</p><h2 className="display-l">Let&apos;s make water safer.</h2><div className="contact-lines"><a href={`mailto:${EMAIL}`}>{EMAIL}</a><a href="tel:+256752209938">Tel: +256 752 209 938</a><span>Facebook: Swim Safe Uganda</span><a href="https://www.swimsafeug.org">Website: www.swimsafeug.org</a></div></div></footer>
    </>
  )
}
