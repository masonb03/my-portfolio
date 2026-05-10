import '../styles/Project.css'

const projects = [
  {
    num: '001',
    name: 'Skinstric',
    tags: 'Typescript · NextJs · CSS',
    description: 'AI skincare recommendation platform with responsive UI and dynamic product matching.',
    href: 'https://skinstric-omega-eight.vercel.app',
  },
  {
    num: '002',
    name: 'NFT World',
    tags: 'React · Tailwind · RestAPI',
    description: 'NFT marketplace with browsing, routing, and responsive UI.',
    href: 'https://mason-internship.vercel.app',
  },
  {
    num: '003',
    name: 'Summarist',
    tags: 'TypescriptL · NextJs · CSS · Firebase · Stripe',
    description: 'Americas best library with dynamic data, routing and payment methods for a subscription.',
    href: 'https://summarist-theta.vercel.app',
  },
  {
    num: '004',
    name: 'Movie Mayhem',
    tags: 'React · CSS · RestAPI',
    description: 'Movie app with dynamic data that includes a search feature from movies, shows, animes, and more.',
    href: 'https://moviemayhem-six.vercel.app',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">

      <p className="projects__label"  data-aos="fade-up" data-aos-delay="100"><span>03</span> — Selected Work</p>
      

      <div className="projects__list" data-aos="fade-up" data-aos-delay="100">
        {projects.map(project => (
          <a key={project.num} href={project.href} target="_blank" className="project__row">
            <span className="project__num" data-aos="fade-up" data-aos-delay="200">{project.num}</span>
            <div className="project__info">
              <p className="project__name" data-aos="fade-up" data-aos-delay="200">{project.name}</p>
              <p className="project__tags" data-aos="fade-up" data-aos-delay="300">{project.tags}</p>
              <p className="project__text" data-aos="fade-up" data-aos-delay="300">{project.description}</p>
            </div>
            <span className="project__arrow">↗</span>
          </a>
        ))}
      </div>

    </section>
  )
}

export default Projects