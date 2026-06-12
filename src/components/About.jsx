import { useMemo } from "react"
import "../styles/About.css"

const About = () => {
    const interest = [
        '🦕 Paleontology nerd',
        '🦖 Godzilla fanatic',
        '✏️ Drawing & illustration',
        '🎮 Gaming',
        '💻 Frontend dev',
        '🎨 Visual design',
    ]

  const contribCells = useMemo(() => {
    const cells = 26 * 7 // 26 weeks × 7 days
    let seed = 7
    const rnd = () => {
      seed = (seed * 9301 + 49297) % 233280
      return seed / 233280
    }
    return Array.from({ length: cells }, () => {
      const r = rnd()
      if (r > .85) return 'l4'
      if (r > .70) return 'l3'
      if (r > .50) return 'l2'
      if (r > .25) return 'l1'
      return ''
    })
  }, [])

  return (
    <>
    <section id="about" className="about">
      <div className="wrap">
        <p className="about__label"  data-aos="fade-up" data-aos-delay="100"><span>01</span> — Who I Am</p>
          <div className="about__grid">
            <div className="about__heading"  data-aos="fade-up" data-aos-delay="200">
                <h2>A bit<br />about <br /> <em>me.</em></h2>
            </div>
            <div className="about__body">
              <p className="about__text"  data-aos="fade-up" data-aos-delay="200">
                I'm an aspiring frontend developer who believes great interfaces
                should feel as natural as <em>breathing</em>. I'm drawn to the craft of
                the web — the way a well-timed animation or a perfectly chosen
                typeface can change how something feels entirely.
              </p>

              <p className="about__text"  data-aos="fade-up" data-aos-delay="300">
                Outside the browser, I draw (mostly creatures), game across
                genres, and go deep on prehistoric life. There's something about
                the scale of dinosaurs — and Godzilla as their cinematic heir —
                that I find <em>endlessly fascinating</em>.
              </p>

              <p className="about__text"  data-aos="fade-up" data-aos-delay="400">
                These aren't separate from my dev work. They shape how I think
                about composition, movement, and storytelling in UI.
              </p>
              <div className="about__interest" data-aos="fade-up" data-aos-delay="450">
                  {interest.map(item => (
                      <span key={item} className="interest__pill"  >{item}</span>
                  ))}
              </div>
            </div>
          </div>
        </div>
    </section>
<section className="now">
  <div className="wrap">
    <div className="sec-tag" data-aos="fade-up">02 — Currently</div>
    <div className="now-grid">

      <div className="now-card span6" data-aos="fade-up" data-aos-delay="100">
        <div className="label">Building</div>
        <h4>Dinotopia <em style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--sage)" }}>v3</em></h4>
        <p>Third iteration of my dinosaur encyclopedia — TypeScript, Next.js,
          and a long-overdue redesign of the species browser.</p>
        <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
          <span className="tag"><span style={{ width: 8, height: 8, background: "#3178C6", borderRadius: "50%", display: "inline-block" }}></span>TypeScript</span>
          <span className="tag"><span style={{ width: 8, height: 8, background: "#000", borderRadius: "50%", display: "inline-block" }}></span>Next.js</span>
          <span className="tag"><span style={{ width: 8, height: 8, background: "#38BDF8", borderRadius: "50%", display: "inline-block" }}></span>Tailwind</span>
        </div>
      </div>

      <div className="now-card span3" data-aos="fade-up" data-aos-delay="150">
        <div className="label">Learning</div>
        <h4>AI in the loop</h4>
        <p>Working out where Claude &amp; Copilot belong in my flow — and where they don't.</p>
      </div>

      <div className="now-card span3" data-aos="fade-up" data-aos-delay="200">
        <div className="label">Now reading</div>
        <h4>Refactoring UI</h4>
        <p>Adam Wathan &amp; Steve Schoger. Re-read, this time with notes.</p>
      </div>

      <div className="now-card span4" data-aos="fade-up" data-aos-delay="100">
        <div className="label">This year on GitHub</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginTop: 6 }}>
          <span className="big-num"><em>320</em></span>
          <span style={{ fontSize: 12, color: "var(--muted)" }}>contributions<br/>across 7 repositories</span>
        </div>
        <div className="contrib" id="contribGrid" aria-hidden="true">
          {contribCells.map((level, i) => (
            <i key={i} className={level}></i>
          ))}
        </div>
      </div>

      <div className="now-card span5" data-aos="fade-up" data-aos-delay="150">
        <div className="label">In rotation <span className="bars"><i></i><i></i><i></i><i></i></span></div>
        <h4>K-Pop &amp; youtube videos</h4>
        <p>BTS, P1harmony, etc for locking in designs and layouts. Random funny youtube videos for vibing. When all else fails, a cup of coffee and a nap.</p>
      </div>

      <div className="now-card span3" data-aos="fade-up" data-aos-delay="200">
        <div className="label">Coffee count today</div>
        <span className="big-num" id="coffee">12<em>.</em></span>
        <p style={{ marginTop: 8 }}>Likely climbing.</p>
      </div>

    </div>
  </div>
</section>
</>
  )
}

export default About