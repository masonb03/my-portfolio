import '../styles/Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
  <div className="wrap">
    <div className="small reveal">06 — Let's connect</div>
    <h2 className="reveal delay-1">Say<em>hi.</em></h2>

    <button className="email-btn" id="emailBtn" data-cursor="link" type="button">
      <span id="emailText"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2c4e495a45425f46416c4b414d4540024f4341">bevinsjm@gmail.com</a></span>
      <span className="copy-state" id="emailState">click to copy</span>
    </button>

    <div className="socials reveal delay-2">
      <a href="https://github.com/masonb03" target="_blank" rel="noopener" data-cursor="link">GitHub</a>
      <a href="https://www.linkedin.com/in/mason-bevins-448341347" target="_blank" rel="noopener" data-cursor="link">LinkedIn</a>
      <a href="#" data-cursor="link">Dribbble</a>
      <a href="#" data-cursor="link">Discord</a>
    </div>
  </div>
</section>
  )
}

export default Contact