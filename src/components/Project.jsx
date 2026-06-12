import '../styles/Project.css'

function Projects() {
  return (
    <section className="work" id="work" data-aos="fade-up" data-aos-delay="0">
  <div className="wrap">
    <div className="sec-tag reveal" data-aos="fade-up" data-aos-delay="100">04 — Selected work</div>
    <div className="work-head" data-aos="fade-up" data-aos-delay="200">
      <h2 className="reveal">Things I've <em>shipped</em>.</h2>
      <span className="work-count reveal delay-1" data-aos="fade-up" data-aos-delay="300">2024 — 2026 · Four featured</span>
    </div>

    <a className="project reveal" href="https://github.com/masonb03/skinstric" target="_blank" rel="noopener" data-cursor="link" data-aos="fade-up" data-aos-delay="400">
      <div className="p-num">001</div>
      <div className="p-body">
        <h3>Skinstric</h3>
        <div className="p-stack"><span>TypeScript</span><span>Next.js</span><span>CSS</span></div>
        <div className="p-meta">AI skincare recommendation platform with responsive UI and dynamic product matching.</div>
      </div>
      <div className="p-year">2026</div>
      <div className="p-arrow">↗</div>
      <div className="p-preview">
        <svg viewBox="0 0 240 160">
          <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F4DCC6"/><stop offset="1" stopSolor="#C28867"/></linearGradient></defs>
          <rect width="240" height="160" fill="url(#g1)"/>
          <circle cx="170" cy="80" r="46" fill="#fff" opacity=".4"/>
          <circle cx="170" cy="80" r="28" fill="#fff" opacity=".7"/>
          <text x="20" y="34" fontFamily="JetBrains Mono" fonSize="9" fill="#3A2418" letterSpacing="2">SKINSTRIC</text>
          <text x="20" y="124" fontFamily="Fraunces" fonSize="22" fill="#3A2418" fontStyle="italic">your skin,</text>
          <text x="20" y="146" fontFamily="Fraunces" fonSize="22" fill="#3A2418" fontWeight="600">decoded.</text>
        </svg>
      </div>
    </a>

    <a className="project reveal" href="https://github.com/masonb03/dinocomp" target="_blank" rel="noopener" data-cursor="link" data-aos="fade-up" data-aos-delay="500">
      <div className="p-num">002</div>
      <div className="p-body">
        <h3>Dinocomp <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--sage)' }}></em></h3>
        <div className="p-stack"><span>TypeScript</span><span>React</span><span>Redux</span><span>Tailwind</span><span>Firebase</span></div>
        <div className="p-meta">A searchable dinosaur species comparator with dynamic data, animations, and filtering.</div>
      </div>
      <div className="p-year">2026</div>
      <div className="p-arrow">↗</div>
      <div className="p-preview">
        <svg viewBox="0 0 240 160">
          <rect width="240" height="160" fill="#2A3A2D"/>
          <path d="M0 130 Q 60 90 120 110 T 240 100 L 240 160 L 0 160 Z" fill="#1F2C22"/>
          <path d="M40 120 Q 50 70 90 80 Q 110 82 130 110 L 200 115 L 200 130 L 30 130 Z" fill="#7FA48A"/>
          <circle cx="92" cy="88" r="3" fill="#1F2C22"/>
          <text x="20" y="32" fontFamily="JetBrains Mono" fontSize="9" fill="#C9D7CC" letterSpacing="2">DINOTOPIA · V3</text>
          <text x="20" y="148" fontFamily="Fraunces" fontSize="14" fontStyle="italic" fill="#C9D7CC">Mesozoic, indexed.</text>
        </svg>
      </div>
    </a>

    <a className="project reveal" href="https://github.com/masonb03/summarist" target="_blank" rel="noopener" data-cursor="link" data-aos="fade-up" data-aos-delay="600">
      <div className="p-num">003</div>
      <div className="p-body">
        <h3>Summarist</h3>
        <div className="p-stack"><span>TypeScript</span><span>Next.js</span><span>Firebase</span><span>Stripe</span></div>
        <div className="p-meta">Book-summary library with dynamic data, routing, and a working subscription flow.</div>
      </div>
      <div className="p-year">2026</div>
      <div className="p-arrow">↗</div>
      <div className="p-preview">
        <svg viewBox="0 0 240 160">
          <rect width="240" height="160" fill="#EEE6D6"/>
          <rect x="20" y="30" width="60" height="90" fill="#1B3A5B" rx="2"/>
          <rect x="90" y="30" width="60" height="90" fill="#B3563C" rx="2"/>
          <rect x="160" y="30" width="60" height="90" fill="#2D5A3D" rx="2"/>
          <text x="20" y="146" fontFamily="Fraunces" fontSize="14" fontStyle="italic" fill="#15140F">A library, summarised.</text>
        </svg>
      </div>
    </a>

    <a className="project reveal" href="https://github.com/masonb03/Movie_Mayhem_2.0" target="_blank" rel="noopener" data-cursor="link" data-aos="fade-up" data-aos-delay="700">
      <div className="p-num">004</div>
      <div className="p-body">
        <h3>Movie Mayhem</h3>
        <div className="p-stack"><span>React</span><span>CSS</span><span>REST API</span></div>
        <div className="p-meta">A search-driven catalog for movies, shows, and anime — built around the TMDB API.</div>
      </div>
      <div className="p-year">2026</div>
      <div className="p-arrow">↗</div>
      <div className="p-preview">
        <svg viewBox="0 0 240 160">
          <rect width="240" height="160" fill="#0F0E1A"/>
          <rect x="14" y="20" width="48" height="68" fill="#7A2640" rx="2"/>
          <rect x="70" y="20" width="48" height="68" fill="#2C4A7A" rx="2"/>
          <rect x="126" y="20" width="48" height="68" fill="#9B6B2A" rx="2"/>
          <rect x="182" y="20" width="48" height="68" fill="#3A6B4A" rx="2"/>
          <rect x="14" y="100" width="216" height="14" rx="7" fill="#1F1E2E"/>
          <text x="20" y="110" fontFamily="JetBrains Mono" fontSize="8" fill="#7A7990">search anything...</text>
          <text x="14" y="140" fontFamily="Fraunces" fontSize="13" fontStyle="italic" fill="#E0DDD0">Roll the credits.</text>
        </svg>
      </div>
    </a>
  </div>
</section>
  )
}

export default Projects