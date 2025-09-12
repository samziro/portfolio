import me from "../../assets/port.png";
import { FaFileDownload } from "react-icons/fa";
import background from "../../assets/bg.svg";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      className="hero h-screen flex flex-col items-center justify-center gap-4 bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img
        className="w-40 rounded-full bg-slate-50 aspect-square"
        src={me}
        alt="Samuel Ziro"
      />
      <h1 className="text-lg md:text-xl text-stone-600">
        Hello! I am Samuel Ziro
      </h1>
      <motion.h1
        className="text-3xl text-center md:text-6xl text-stone-600"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frontend Web Developer
      </motion.h1>
      <p className="lg:md:w-3/4 text-center leading-loose text-stone-600">
        {`Transform your vision into reality with a skilled frontend developer.
        Specializing in responsive, user-friendly designs that boost engagement
        and enhance user experience. Let's create something amazing together!`}
      </p>
      <div className="flex items-center gap-10">
        <button
          className="px-4 py-2 text-stone-600 bg-slate-50 ring-1 ring-neutral-400 rounded-full hover:bg-stone-600 hover:text-slate-50 duration-500"
          aria-label="Contact me"
        >
          <Link to="contact" smooth={true} offset={0} duration={800}>
            Contact Me
          </Link>
        </button>
        <a
          href="/path-to-resume.pdf"
          className="px-4 py-2 text-stone-600 bg-slate-50 ring-1 ring-neutral-400 rounded-full flex items-center gap-2 hover:bg-stone-600 hover:text-slate-50 duration-500"
          aria-label="Download Resume"
          download
        >
          Resume <FaFileDownload />
        </a>
      </div>
    </header>
  );
};

export default Header;
