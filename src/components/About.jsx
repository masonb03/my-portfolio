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

  return (
    <section id="about" className="about">
        <div className="about__heading"  data-aos="fade-up" data-aos-delay="200">
            <h2>
                A bit<br />
                about<br />
                <span className="about__heading--italic">me.</span>
             </h2>
        </div>
        <div className="about__body">
        <p className="about__label"  data-aos="fade-up" data-aos-delay="100"><span>01</span> — Who I Am</p>

        <p className="about__text"  data-aos="fade-up" data-aos-delay="200">
          I'm an aspiring frontend developer who believes great interfaces
          should feel as natural as breathing. I'm drawn to the craft of
          the web — the way a well-timed animation or a perfectly chosen
          typeface can change how something feels entirely.
        </p>

        <p className="about__text"  data-aos="fade-up" data-aos-delay="300">
          Outside the browser, I draw (mostly creatures), game across
          genres, and go deep on prehistoric life. There's something about
          the scale of dinosaurs — and Godzilla as their cinematic heir —
          that I find endlessly fascinating.
        </p>

        <p className="about__text"  data-aos="fade-up" data-aos-delay="400">
          These aren't separate from my dev work. They shape how I think
          about composition, movement, and storytelling in UI.
        </p>
        <div className="about__interest">
            {interest.map(item => (
                <span key={item} className="interest__pill"  data-aos="fade-up" data-aos-delay="250">{item}</span>
            ))}
        </div>
        </div>
    </section>
  )
}

export default About