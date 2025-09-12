import { FaGitlab } from "react-icons/fa";
import { IoLogoLinkedin, IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:flex md:items-center md:justify-between my-4 px-4">
      <p className="text-stone-600 text-center">2024 © All rights reserved.</p>
      <ul className="flex items-center justify-center gap-4 list-none text-stone-600">
        <p className="font-semibold">Follow me:</p>
        <li>
          <a
            href="https://gitlab.com/dashboard/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg cursor-pointer hover:text-stone-800 transition-transform duration-500"
            aria-label="GitLab profile"
          >
            <FaGitlab />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/samuel-ziro-b49b6127b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg cursor-pointer hover:text-stone-800 transition-transform duration-500"
            aria-label="LinkedIn profile"
          >
            <IoLogoLinkedin />
          </a>
        </li>
        <li>
          <a
            href="tel:0769751566"
            className="text-lg cursor-pointer hover:text-stone-800 transition-transform duration-500"
            aria-label="Call me"
          >
            <IoCallSharp />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
