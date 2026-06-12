import '../styles/Process.css'

function Process () {
    return (
        <section className="process">
          <div className="wrap">
            <div className="sec-tag reveal" data-aos="fade-up" data-aos-delay="0">05 — How I work</div>
            <div className="process-grid">
              <h2 className="process-head reveal" data-aos="fade-up" data-aos-delay="100">A small,<br/>slow <em>loop.</em></h2>
              <ol className="process-list">
                <li className="reveal" data-aos="fade-up" data-aos-delay="200">
                  <span className="step-num">i.</span>
                  <div>
                    <h4>Sketch before code</h4>
                    <p>Paper, then Figma, then anything that compiles. Cheaper to throw away a sketch than a component.</p>
                  </div>
                </li>
                <li className="reveal delay-1" data-aos="fade-up" data-aos-delay="300">
                  <span className="step-num">ii.</span>
                  <div>
                    <h4>Build the bones</h4>
                    <p>Semantic HTML, accessible by default, layout figured out before a single color is chosen.</p>
                  </div>
                </li>
                <li className="reveal delay-2" data-aos="fade-up" data-aos-delay="400">
                  <span className="step-num">iii.</span>
                  <div>
                    <h4>Type &amp; rhythm</h4>
                    <p>Hierarchy lives in type and space. If a page doesn't read in greyscale, color won't save it.</p>
                  </div>
                </li>
                <li className="reveal delay-3" data-aos="fade-up" data-aos-delay="500">
                  <span className="step-num">iv.</span>
                  <div>
                    <h4>Animate with restraint</h4>
                    <p>Motion should explain something, never decorate. If a transition isn't doing a job, it gets cut.</p>
                  </div>
                </li>
                <li className="reveal delay-4" data-aos="fade-up" data-aos-delay="600">
                  <span className="step-num">v.</span>
                  <div>
                    <h4>Ship, then sit with it</h4>
                    <p>Use the thing. Notice what feels off. Come back the next morning and fix the obvious.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

    )
}

export default Process;