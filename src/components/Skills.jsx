import "../styles/Skills.css"

const Skills = () => {
  return (
    <section id="skills" className="skills" data-aos="fade-up" data-aos-delay="100">
      <div className='wrap'>
        <p className="skills__label sec-tag" data-aos="fade-up" data-aos-delay="150">03 — What I Work With</p>
        <h2 className='skills__head' data-aos="fade-up" data-aos-delay="200">
          A small, sharp toolkit — chosen to <em>get out of the way</em>
          so the design can do the talking.
        </h2>
        <div className="skill__grid">
          <div className="skill-col" data-aos="fade-up" data-aos-delay="250">
            <div className="num">001</div>
            <h3>Languages</h3>
            <ul>
              <li data-aos="fade-up" data-aos-delay="300">HTML5 &amp; CSS3 <span className="marker">daily</span></li>
              <li data-aos="fade-up" data-aos-delay="350">JavaScript (ES6+) <span className="marker">daily</span></li>
              <li data-aos="fade-up" data-aos-delay="400">TypeScript <span className="marker">growing</span></li>
            </ul>
          </div>
          <div className="skill-col" data-aos="fade-up" data-aos-delay="450">
            <div className="num">002</div>
            <h3>Frameworks</h3>
            <ul>
              <li data-aos="fade-up" data-aos-delay="500">React <span className="marker">main</span></li>
              <li data-aos="fade-up" data-aos-delay="550">Next.js <span className="marker">main</span></li>
              <li data-aos="fade-up" data-aos-delay="600">Tailwind CSS <span className="marker">daily</span></li>
              <li data-aos="fade-up" data-aos-delay="650">Redux <span className="marker">often</span></li>
              <li data-aos="fade-up" data-aos-delay="700">Bootstrap <span className="marker">sometimes</span></li>
              <li data-aos="fade-up" data-aos-delay="750">Firebase <span className="marker">often</span></li>
            </ul>
          </div>
          <div className="skill-col" data-aos="fade-up" data-aos-delay="800">
            <div className="num">003</div>
            <h3>Tools &amp; platforms</h3>
            <ul>
              <li data-aos="fade-up" data-aos-delay="850">Git &amp; GitHub <span className="marker">daily</span></li>
              <li data-aos="fade-up" data-aos-delay="900">Vite <span className="marker">daily</span></li>
              <li data-aos="fade-up" data-aos-delay="950">Figma <span className="marker">often</span></li>
              <li data-aos="fade-up" data-aos-delay="1000">Vercel &amp; Netlify <span className="marker">often</span></li>
              <li data-aos="fade-up" data-aos-delay="1050">VS Code <span className="marker">always</span></li>
              <li data-aos="fade-up" data-aos-delay="1100">Blender <span className="marker">hobby</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills