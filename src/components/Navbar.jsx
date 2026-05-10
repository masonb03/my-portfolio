import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#hero" className='navbar__logo'>MB.</a>

        <ul className='navbar__links'>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar