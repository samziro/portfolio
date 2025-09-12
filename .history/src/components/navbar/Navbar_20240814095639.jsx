import { useState } from "react";
import { Link } from "react-scroll";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

// Reusable component for menu items
const NavItem = ({ to, offset, duration, children, onClick }) => (
  <Link
    to={to}
    smooth={true}
    offset={offset}
    duration={duration}
    className="cursor-pointer"
    onClick={onClick}
  >
    <li>{children}</li>
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="backdrop-blur-sm bg-slate-50/30 w-full z-10 fixed top-0 py-2 shadow-sm">
      <nav className="sides text-stone-600 flex items-center justify-between md:items-center md:justify-between font-medium">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          offset={0}
          duration={500}
          className="text-4xl cursor-pointer"
        >
          S.
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:gap-8">
          <NavItem to="hero" offset={0} duration={500}>
            Home
          </NavItem>
          <NavItem to="about" offset={-180} duration={500}>
            About
          </NavItem>
          <NavItem to="services" offset={0} duration={500}>
            Services
          </NavItem>
          <NavItem to="projects" offset={-180} duration={500}>
            Project
          </NavItem>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden text-xl">
          <button onClick={handleClick} aria-label="Toggle menu">
            {isMenuOpen ? <RiCloseLargeFill /> : <FaBarsStaggered />}
          </button>
        </div>

        {/* Desktop Contact Button */}
        <button
          className="hidden md:block ring-1 ring-neutral-400 px-4 py-2 rounded-full hover:bg-stone-600 hover:text-slate-50 transition duration-500"
          aria-label="Contact me"
        >
          <Link to="contact" smooth={true} offset={0} duration={500}>
            Contact Me
          </Link>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className=" ">
        <ul
          className={`absolute top-0 left-2 right-2 mt-16 transition-all duration-500 ease-in-out bg-slate-50 text-stone-600 rounded-lg shadow-lg py-5 px-4 space-y-4 flex flex-col items-center ${
            isMenuOpen ? "" : "right-[900px]"
          }`}
        >
          <NavItem to="hero" offset={0} duration={500} onClick={handleClick}>
            Home
          </NavItem>
          <NavItem
            to="about"
            offset={-130}
            duration={500}
            onClick={handleClick}
          >
            About
          </NavItem>
          <NavItem
            to="services"
            offset={0}
            duration={500}
            onClick={handleClick}
          >
            Services
          </NavItem>
          <NavItem
            to="projects"
            offset={-130}
            duration={500}
            onClick={handleClick}
          >
            Projects
          </NavItem>
          <button
            className="ring-1 ring-neutral-400 px-4 py-1 rounded-full hover:bg-stone-600 hover:text-slate-50 transition duration-500"
            aria-label="Contact me"
          >
            <Link
              to="contact"
              smooth={true}
              offset={-130}
              duration={500}
              onClick={handleClick}
            >
              Contact Me
            </Link>
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
