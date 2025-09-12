import { useState, useCallback } from "react";
import { Link } from "react-scroll";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    {
      isMenuOpen ? <RiCloseLargeFill /> : <FaBarsStaggered />;
    }

  return (
    <header className=" bg-slate-50 w-full z-10 fixed top-0 py-2 shadow-sm">
      <nav className="sides">
        <div className="text-stone-600 md:flex md:items-center md:justify-between  font-medium">
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            className="text-4xl cursor-pointer"
          >
            S.
          </Link>
          <ul>
            li
          </ul>
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
