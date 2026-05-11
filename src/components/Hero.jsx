import "../styles/Hero.css"

const Hero = () => {
  return (
    <section id="hero" className="hero">
        <div className="hero__left">
            <p className="hero__tag" data-aos="fade-up" data-aos-delay="100">Frontend Developer & Creative</p>
            <h1 className="hero__name"  data-aos="fade-up" data-aos-delay="200">Mason<br />
            <span className="hero__name--italic">Bevins</span><br />
            </h1>
            <p className="hero__description"  data-aos="fade-up" data-aos-delay="300">I build celan, thoughful, UI - and in my spare time I draw, game, and believe that dinosaurs were the peak of earth history. Now looking for my first frontend role.</p>
            <a href="#projects" className="hero__cta"  data-aos="fade-up" data-aos-delay="400">View my work →</a>
        </div>
    </section>
  )
}

export default Hero