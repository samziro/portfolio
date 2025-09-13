import me from "../../assets/port.png";
import background from "../../assets/bg.svg";
import { Link } from "react-scroll";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      className="hero h-screen flex flex-col items-center justify-center gap-6 bg-cover bg-no-repeat bg-fixed text-stone-700 px-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Profile Image */}
      <motion.img
        src={me}
        alt="Samuel Ziro"
        className="w-40 rounded-full border-4 border-white shadow-md bg-slate-50 aspect-square"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Greeting */}
      <motion.h1
        className="text-lg md:text-xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        👋 Hello, I'm Samuel Ziro
      </motion.h1>

      {/* Headline */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Full-Stack Developer | DevOps Engineer | Creative Designer
      </motion.h2>

      {/* Description */}
      <motion.p
        className="max-w-3xl text-center text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        I specialize in MERN stack development, containerized deployments (Docker, GitLab CI/CD, Kubernetes),
        and creative content design. From robust web apps to impactful digital assets — I deliver end-to-end
        solutions tailored to your vision.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center items-center gap-6 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          to="contact"
          smooth={true}
          offset={0}
          duration={800}
          className="px-6 py-2 border border-stone-600 rounded-full bg-slate-50 hover:bg-stone-700 hover:text-white transition duration-500 cursor-pointer"
        >
          Contact Me
        </Link>

        <a
          href="https://docs.google.com/document/d/1W2pIVRVGjVECaC2WIWTQl2yflqoUNqK6/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-stone-600 rounded-full bg-slate-50 flex items-center gap-2 hover:bg-stone-700 hover:text-white transition duration-500"
        >
          Resume <FaFileDownload />
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
