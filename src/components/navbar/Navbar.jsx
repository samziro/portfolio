import { useState } from "react";
import { Link } from "react-scroll";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../assets/logo.png'

// Reusable Nav Link Item
const NavItem = ({ to, offset, duration, children, onClick }) => (
  <Link
    to={to}
    smooth={true}
    offset={offset}
    duration={duration}
    onClick={onClick}
    className="cursor-pointer transition hover:text-black/90"
  >
    <li>{children}</li>
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/60 shadow-sm">
      <nav
        className="sides flex items-center justify-between text-stone-700 font-medium"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link to="hero" smooth offset={0} duration={500} className="cursor-pointer">
          <img src={logo} alt="logo" className="w-28" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center text-sm">
          <NavItem to="hero" offset={0} duration={500}>Home</NavItem>
          <NavItem to="about" offset={-250} duration={500}>About</NavItem>
          <NavItem to="services" offset={-230} duration={500}>Services</NavItem>
          <NavItem to="projects" offset={-80} duration={500}>Projects</NavItem>
        </ul>

        {/* Contact Button (Desktop) */}
        <Link
          to="contact"
          smooth
          offset={-60}
          duration={500}
          className="hidden md:inline-block px-5 py-2 cursor-pointer rounded-full border border-stone-400 hover:bg-stone-700 hover:text-white transition"
        >
          Contact Me
        </Link>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <RiCloseLargeFill /> : <FaBarsStaggered />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-16 left-4 right-4 bg-white shadow-lg rounded-lg px-6 py-5 z-40 text-center"
          >
            <ul className="space-y-5 text-stone-700 text-base">
              <NavItem to="hero" offset={0} duration={500} onClick={toggleMenu}>Home</NavItem>
              <NavItem to="about" offset={-80} duration={500} onClick={toggleMenu}>About</NavItem>
              <NavItem to="services" offset={-60} duration={500} onClick={toggleMenu}>Services</NavItem>
              <NavItem to="services" offset={-80} duration={500} onClick={toggleMenu}>Projects</NavItem>
              <Link
                to="contact"
                smooth
                offset={-80}
                duration={500}
                onClick={toggleMenu}
                className="inline-block px-4 py-2 border border-stone-400 rounded-full hover:bg-stone-700 hover:text-white transition"
              >
                Contact Me
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
