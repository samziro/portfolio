import me from '../../assets/port.png'
import { FaFileDownload } from "react-icons/fa";
import background from '../../assets/bg.svg'
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div
      className="hero h-svh flex flex-col items-center justify-center gap-4 bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${background}) `,
      }}
    >
      <img
        className="w-40 rounded-full bg-slate-50 aspect-square"
        src={me}
        alt="me_image"
      />
      <h1 className="text-lg md:text-xl text-stone-600">
        Hello! I am Samuel Ziro
      </h1>
      <motion.h1 className="text-3xl text-center md:text-6xl text-stone-600"initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 120 }}>
        frontend web developer
      </motion.h1>
      <h1 className="lg md:w-3/4 text-center leading-loose text-stone-600">
        {`Transform your vision into reality with a skilled frontend developer.
        Specializing in responsive, user-friendly designs that boost engagement
        and enhance user experience. Let's create something amazing together!`}
      </h1>
      <div className="flex items-center gap-10">
        <button className="px-4 py-2 cursor-pointer text-stone-600 bg-slate-50 ring-1 ring-neutral-400 rounded-full  hover:bg-stone-600 hover:text-slate-50 duration-500">
          <Link to="contact" smooth={true} offset={0} duration={800}>
            Contact me
          </Link>
        </button>
        <button className="px-4 py-2 cursor-pointer text-stone-600 bg-slate-50 ring-1 ring-neutral-400 rounded-full flex items-center gap-2  hover:bg-stone-600 hover:text-slate-50 duration-500">
          Resume <FaFileDownload />
        </button>
      </div>
    </div>
  );
}

export default Header
