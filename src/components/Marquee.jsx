import '../styles/Marquee.css'

const items = ['Dinosaurs', 'Godzilla', 'Drawing', 'Gaming', 'Frontend', 'Illustration']

function Marquee() {
  const doubled = [...items, ...items]

  return (
    <section className="marquee">
      <div className="marquee__track">
        {doubled.map((item, index) => (
          <span key={index} className="marquee__item">
            {item} <span className="marquee__dot">·</span>
          </span>
        ))}
      </div>
    </section>
  )
}

export default Marquee