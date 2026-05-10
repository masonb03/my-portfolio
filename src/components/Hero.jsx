import "../styles/Hero.css"

const Hero = () => {
  return (
    <section id="hero" className="hero">
        <div className="hero__left" data-aos="fade-up">
            <p className="hero__tag">Frontend Developer & Creative</p>
            <h1 className="hero__name">Mason<br />
            <span className="hero__name--italic">Bevins</span><br />
            </h1>
            <p className="hero__description">I build celan, thoughful, UI - and in my spare time I draw, game, and believe that dinosaurs were the peak of earth history. Now looking for my first frontend role.</p>
            <a href="#projects" className="hero__cta">View my work →</a>
        </div>
        <div className="hero__right">
            <p className="hero__placeholder">🦕</p>
        </div>
    </section>
  )
}

export default Hero