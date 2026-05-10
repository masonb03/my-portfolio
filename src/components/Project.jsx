import '../styles/Project.css'

const projects = [
  {
    num: '001',
    name: 'Project One',
    tags: 'React · CSS · Frontend',
    href: '#',
  },
  {
    num: '002',
    name: 'Illustration Series',
    tags: 'Drawing · Digital art · Concept',
    href: '#',
  },
  {
    num: '003',
    name: 'Project Three',
    tags: 'HTML · CSS · JavaScript',
    href: '#',
  },
  {
    num: '004',
    name: 'Game Fanart & World-Building',
    tags: 'Illustration · Lore · Creative writing',
    href: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">

      <p className="projects__label"><span>03</span> — Selected Work</p>

      <div className="projects__list">
        {projects.map(project => (
          <a key={project.num} href={project.href} className="project__row">
            <span className="project__num">{project.num}</span>
            <div className="project__info">
              <p className="project__name">{project.name}</p>
              <p className="project__tags">{project.tags}</p>
            </div>
            <span className="project__arrow">↗</span>
          </a>
        ))}
      </div>

    </section>
  )
}

export default Projects