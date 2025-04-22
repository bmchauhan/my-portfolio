// src/components/Header.jsx
import { useState, useEffect } from "react";

const Header = ({ theme, onThemeSwitch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-secondary">Bhavesh.dev</h1>
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-md font-secondary">
            <li><a href="#about" onClick={(e) => handleClick(e, 'about')} className="hover:text-secondary transition-colors duration-300">About</a></li>
            <li><a href="#skills" onClick={(e) => handleClick(e, 'skills')} className="hover:text-secondary transition-colors duration-300">Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="hover:text-secondary transition-colors duration-300">Projects</a></li>
            <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="hover:text-secondary transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
        <button 
          className="md:hidden text-2xl focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-50 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute left-0 top-0 w-64 bg-primary h-full transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold text-secondary mb-8">Menu</h2>
            <ul className="space-y-6">
              <li><a href="#about" onClick={(e) => handleClick(e, 'about')} className="text-white hover:text-secondary transition-colors duration-300 block">About</a></li>
              <li><a href="#skills" onClick={(e) => handleClick(e, 'skills')} className="text-white hover:text-secondary transition-colors duration-300 block">Skills</a></li>
              <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')} className="text-white hover:text-secondary transition-colors duration-300 block">Projects</a></li>
              <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')} className="text-white hover:text-secondary transition-colors duration-300 block">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
