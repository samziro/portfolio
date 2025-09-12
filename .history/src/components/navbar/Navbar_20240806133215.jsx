import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sides text-stone-600 z-10 fixed top-0 w-full py-2 md:flex md:items-center md:justify-between shadow-sm bg-slate-50 font-medium">
      <h1 className="text-4xl">S.</h1>
      <div className="links hidden grid pb-4 grid-cols-1 gap-2 md:flex md:items-center md:gap-8 list-none md:pb-0">
        <Link to="hero" smooth={true} offset={0} duration={500}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link to="about" smooth={true} offset={0} duration={500}>
          <li className="cursor-pointer">About me</li>
        </Link>
        <Link to="works" smooth={true} offset={0} duration={500}>
          <li className="cursor-pointer">Services</li>
        </Link>
        <Link to="hero" smooth={true} offset={0} duration={500}>
          <li className="cursor-pointer">Projects</li>
        </Link>
      </div>
      <button className="hidden md:block ring-1 ring-neutral-400 btnPadding rounded-full">
        Contact me
      </button>
    </nav>
  );
}

export default Navbar
