import { FaGitlab } from "react-icons/fa";
import { IoLogoLinkedin, IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:flex md:items-center md:justify-between px-4 py-6 border-t text-stone-600">
      <p className="text-center text-sm md:text-base">
        &copy; {new Date().getFullYear()} Designed by <span className="font-semibold">samtechs</span>.
      </p>

      <ul className="flex items-center justify-center gap-5 mt-3 md:mt-0 text-lg">
        <span className="font-semibold text-sm md:text-base">Follow me:</span>

        <li>
          <a
            href="https://gitlab.com/dashboard/projects"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab Profile"
            className="hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400 rounded transition"
          >
            <FaGitlab />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/samuel-ziro-b49b6127b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400 rounded transition"
          >
            <IoLogoLinkedin />
          </a>
        </li>

        <li>
          <a
            href="tel:+254769751566"
            aria-label="Call me"
            className="hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400 rounded transition"
          >
            <IoCallSharp />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
