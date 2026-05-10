import "../styles/Skills.css"
const skills = [
  {
    num: '001',
    title: 'Building',
    items: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React', 'Responsive design', 'Accessibility'],
  },
  {
    num: '002',
    title: 'Styling',
    items: ['CSS animations', 'Tailwind CSS', 'Figma', 'Typography systems', 'Color theory'],
  },
  {
    num: '003',
    title: 'Creating',
    items: ['Digital illustration', 'UI/UX thinking', 'Concept art', 'Visual storytelling'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <p className="skills__label"><span>02</span> - What I Work With</p>

      <div className="skill__grid">
        {skills.map(skill => (
          <div key={skill.num} className="skill__cell">
              <p className="skill__number">{skill.num}</p>
              <h3 className="skill__title">{skill.title}</h3>
              <ul className="skill__list">
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