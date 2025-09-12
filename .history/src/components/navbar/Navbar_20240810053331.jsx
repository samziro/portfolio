import { useState } from "react";
import { Link } from "react-scroll";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" bg-slate-50 w-full z-10 fixed top-0 py-2 shadow-sm">
      <nav className="sides">
        <div className="text-stone-600 flex items-center justify-between md:flex md:items-center md:justify-between  font-medium">
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            className="text-4xl cursor-pointer"
          >
            S.
          </Link>
          {/*large menu*/}
          <ul className="hidden md:flex md:items-center md:justify-center md:gap-8">
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer"
            >
              <li>Home</li>
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={-180}
              duration={500}
              className="cursor-pointer"
            >
              <li>About</li>
            </Link>
            <Link
              to="services"
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer"
            >
              <li>Services</li>
            </Link>
            <Link
              to="projects"
              smooth={true}
              offset={-180}
              duration={500}
              className="cursor-pointer"
            >
              <li>Project</li>
            </Link>
          </ul>

          <div className="md:hidden">
            <button onClick={handleClick}>
              {isMenuOpen ? <RiCloseLargeFill /> : <FaBarsStaggered />}
            </button>
          </div>

          <button
            className="hidden md:block ring-1 ring-neutral-400 px-4 py-2 rounded-full hover:bg-stone-600 hover:text-slate-50 transition duration-500"
            aria-label="Contact me"
          >
            <Link to="contact" smooth={true} offset={0} duration={500}>
              Contact Me
            </Link>
          </button>
        </div>
        {/*mobile menu*/}
        <ul
          className={`text-stone-600 space-y-4 px-4 duration-300 bg-slate-50 rounded-lg shadow-lg mt-16 py-5 ${
            isMenuOpen
              ? "flex flex-col items-center justify-center fixed top-0 left-2 right-2"
              : "hidden"
          }`}
        >
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer"
            onClick={handleClick}
          >
            <li>Home</li>
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={-10}
            duration={500}
            className="cursor-pointer"
            onClick={handleClick}
          >
            <li>About</li>
          </Link>
          <Link
            to="services"
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer"
            onClick={handleClick}
          >
            <li>Services</li>
          </Link>
          <Link
            to="projects"
            smooth={true}
            offset={-180}
            duration={500}
            className="cursor-pointer"
            onClick={handleClick}
          >
            <li>Project</li>
          </Link>
          <button
            className="ring-1 ring-neutral-400 px-4 py-1 rounded-full hover:bg-stone-600 hover:text-slate-50 transition duration-500"
            aria-label="Contact me"
          >
            <Link to="contact" smooth={true} offset={0} duration={500}>
              Contact Me
            </Link>
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
