import '../styles/Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">

      <p className="contact__label"><span>04</span> — Let's connect</p>

      <h2 className="contact__heading">
        Say<br />
        <span className="contact__heading-italic">hello.</span>
      </h2>

      <a href="mailto:you@email.com" className="contact__email">
        you@email.com
      </a>

      <div className="contact__socials">
        <a href="#" className="contact__social-link">GitHub</a>
        <a href="#" className="contact__social-link">LinkedIn</a>
        <a href="#" className="contact__social-link">Dribbble</a>
        <a href="#" className="contact__social-link">Twitter / X</a>
      </div>

    </section>
  )
}

export default Contact