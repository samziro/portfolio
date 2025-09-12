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
      <div></div>
      </nav>
    </header>
  );
};

export default Navbar;
