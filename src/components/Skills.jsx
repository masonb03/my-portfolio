import "../styles/Skills.css"

const Skills = () => {
  return (
    <section id="skills" className="skills"  data-aos="fade-up" data-aos-delay="100">
      <div className='wrap'>
      <p className="skills__label sec-tag"  data-aos="fade-up" data-aos-delay="100">03 — What I Work With</p>
      <h2 className='skills__head' data-aos="fade-up" data-aos-delay="200">
        A small, sharp toolkit — chosen to <em>get out of the way</em>
        so the design can do the talking.
      </h2>
      <div className="skill__grid">
        <div className="skill-col">
          <div className="num">001</div>
            <h3>Languages</h3>
            <ul>
              <li>HTML5 &amp; CSS3 <span className="marker">daily</span></li>
              <li>JavaScript (ES6+) <span className="marker">daily</span></li>
              <li>TypeScript <span className="marker">growing</span></li>
            </ul>
        </div>
        <div className="skill-col">
          <div className="num">002</div>
          <h3>Frameworks</h3>
          <ul>
            <li>React <span className="marker">main</span></li>
            <li>Next.js <span className="marker">main</span></li>
            <li>Tailwind CSS <span className="marker">daily</span></li>
            <li>Redux <span className="marker">often</span></li>
            <li>Bootstrap <span className="marker">sometimes</span></li>
            <li>Firebase <span className="marker">often</span></li>
          </ul>
        </div>
        <div className="skill-col">
          <div className="num">003</div>
          <h3>Tools &amp; platforms</h3>
          <ul>
            <li>Git &amp; GitHub <span className="marker">daily</span></li>
            <li>Vite <span className="marker">daily</span></li>
            <li>Figma <span className="marker">often</span></li>
            <li>Vercel &amp; Netlify <span className="marker">often</span></li>
            <li>VS Code <span className="marker">always</span></li>
            <li>Blender <span className="marker">hobby</span></li>
          </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Skills