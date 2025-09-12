import { useState } from "react";
import { Link } from "react-scroll";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(true)
  })

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
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Project</li>
          </ul>
          {/*mobile menu*/}
          <ul className=" flex-col items-center justify-center hidden">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Project</li>
          </ul>

          <div className="md:hidden">
            <button onClick={ha}>
              {isMenuOpen ? <RiCloseLargeFill /> : <FaBarsStaggered />}
            </button>
          </div>

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
