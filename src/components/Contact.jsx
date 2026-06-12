import '../styles/Contact.css'
import { useState } from 'react'

function Contact() {
  const [copyState, setCopyState] = useState('click to copy')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('bevinsjm@gmail.com')
      setCopyState('✓ copied')
      setTimeout(() => setCopyState('click to copy'), 1800)
    } catch {
      setCopyState('press ⌘C')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">

        <div className="small" data-aos="fade-up">06 — Let's connect</div>

        <h2 data-aos="fade-up" data-aos-delay="100">
          Say<em>hi.</em>
        </h2>

        <button
          className="email-btn"
          type="button"
          onClick={handleCopy}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span>bevinsjm@gmail.com</span>
          <span className="copy-state">{copyState}</span>
        </button>

        <div className="socials" data-aos="fade-up" data-aos-delay="300">
          <a href="https://github.com/masonb03" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mason-bevins-448341347" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#" >Dribbble</a>
          <a href="#" >Discord</a>
        </div>

      </div>
    </section>
  )
}

export default Contact