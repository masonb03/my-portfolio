import '../styles/Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact"  data-aos="fade-up" data-aos-delay="100">

      <p className="contact__label"  data-aos="fade-up" data-aos-delay="100"><span>04</span> — Let's connect</p>

      <h2 className="contact__heading"  data-aos="fade-up" data-aos-delay="200">
        Say<br />
        <span className="contact__heading-italic">hi.</span>
      </h2>

      <a 
      href="https://mail.google.com/mail/?view=cm&to=bevinsjm@gmail.com"
      className="contact__email"  
      target="_blank"
      data-aos="fade-up" 
      data-aos-delay="300">
        bevinsjm@gmail.com
      </a>

      <div className="contact__socials"  data-aos="fade-up" data-aos-delay="400">
        <a href="https://github.com/masonb03" className="contact__social-link" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/mason-bevins-448341347/" className="contact__social-link" target="_blank">LinkedIn</a>
        <a href="#" className="contact__social-link">Dribbble</a>
        <a href="#" className="contact__social-link">Twitter / X</a>
      </div>

    </section>
  )
}

export default Contact