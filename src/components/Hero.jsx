import "../styles/Hero.css"
import { useState, useEffect } from "react";

const Hero = () => {
const [time, setTime] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);
  return () => clearInterval(timer);
}, [])

const formatTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <section id="hero" className="hero">
      <div className='wrap'>
        <div className="hero-corner" data-aos="fade-up" data-aos-delay="500">
          <span id='location'>Port Huron, MI · USA</span>
          <span className="time" id='clock'>{formatTime} local</span>
        </div>
        <div className="hero__left">
            <p className="hero__tag" data-aos="fade-up" data-aos-delay="100">Frontend Developer & Creative</p>
            <h1 className="hero__name"  data-aos="fade-up" data-aos-delay="200">
              <span className="first"><span>Mason</span></span>
              <span className="last"><span>Bev<em>i</em>ns.</span></span>
            </h1>
              <div className="hero-meta">
                <p className="hero__desc" data-aos="fade-up" data-aos-delay="300">
                  I build <em>calm, considered</em> interfaces — and in my spare time
                  I draw, game, and remain convinced that dinosaurs were the peak of
                  Earth history. Looking for my first frontend role.
                </p>

                <div className="cta-row" data-aos="fade-up" data-aos-delay="400">
                  <span className="status-pill">
                    <span className="dot"></span>
                    <span>Open to junior frontend roles · responding within 24h</span>
                  </span>
                  <a href="#work" className="cta">
                    <span>View selected work</span>
                    <span className="arrow">→</span>
                  </a>
                </div>
              </div>
          </div>
        <div className="scroll-hint">
          <span>Scroll</span>
          <span className="line"></span>
        </div>
      </div>
    </section>
  )
}

export default Hero