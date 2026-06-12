import About from "./components/About";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Process from "./components/Process";

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button')) setIsHovering(true);
    }

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) setIsHovering(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress((scrolled / total) * 100);
    }
    
    window.addEventListener('scroll', handleScroll);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    }
  }, [])


  return (
    <>
    <div className={`cursor ${isHovering ? 'is-hover' : ''}`} style={{ left: position.x, top: position.y }}></div>
    <div className="cursor-dot" style={{ left: position.x, top: position.y }}></div>
    <div className='scroll-progress' style={{ width: `${progress}%` }}></div>
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Marquee />
      <Process />
      <Contact />
      <Footer />
    </>
  )
}

export default App
