import "../styles/Skills.css"
const skills = [
  {
    num: '001',
    title: 'Languages',
    items: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'Typescript'],
  },
  {
    num: '002',
    title: 'Framework',
    items: ['React', 'Tailwind CSS', 'Bootstrap', 'Firebase', 'NextJS', 'Redux'],
  },
  {
    num: '003',
    title: 'Tools & Platforms',
    items: ['Netlify', 'Vercel', 'Github', 'Vite', 'Figma', 'VsCode'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="skills"  data-aos="fade-up" data-aos-delay="100">
      <p className="skills__label"  data-aos="fade-up" data-aos-delay="100"><span>02</span> - What I Work With</p>

      <div className="skill__grid">
        {skills.map(skill => (
          <div key={skill.num} className="skill__cell"  data-aos="fade-up" data-aos-delay="200">
              <p className="skill__number"  data-aos="fade-up" data-aos-delay="300">{skill.num}</p>
              <h3 className="skill__title"  data-aos="fade-up" data-aos-delay="400">{skill.title}</h3>
              <ul className="skill__list"  data-aos="fade-up" data-aos-delay="500">
                {skill.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Skills