import { useState, useCallback } from "react";
import { Link } from "react-scroll";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <header>
      <nav className="sides text-stone-600 z-10 fixed top-0 w-full py-2 flex items-center justify-between md:flex md:items-center md:justify-between shadow-sm bg-slate-50 font-medium">
      <Link
        to="hero"
        smooth={true}
        offset={0}
        duration={500}
        className="text-4xl cursor-pointer"
      >
        S.
      </Link>

      <div className="md:hidden flex items-center">
        <button
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-2xl"
        >
          {isMenuOpen ? <RiCloseLargeFill /> : <FaBarsStaggered />}
        </button>
      </div>

      <ul
        className={`links md:flex md:items-center md:gap-8 list-none md:pb-0 pb-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {["hero", "about", "services", "project"].map((section, index) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              offset={index === 1 ? -200 : index === 3 ? -160 : 0}
              duration={500}
              className="cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="hidden md:block ring-1 ring-neutral-400 px-4 py-2 rounded-full"
        aria-label="Contact me"
      >
        <Link to="contact" smooth={true} offset={0} duration={500}>
          Contact Me
        </Link>
      </button>
    </nav>
    </header>
  );
};

export default Navbar;
