import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#hero" className='navbar__logo'>MB<span>.</span></a>

        <ul className='navbar__links'>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Stack</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar