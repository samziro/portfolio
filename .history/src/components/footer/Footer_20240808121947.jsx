
import { FaGitlab } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  
  return (
    <div className="grid grid-cols-1 md:flex md:items-center md:justify-between my-4">
      <p className="text-stone-600 text-center">2024 © All rights reserved.</p>
      <ul className="flex items-center justify-center gap-4 list-none text-stone-600">
        <p> Follow me:</p>
        <a
          href="https://gitlab.com/dashboard/projects"
          className="cursor-pointer text-lg hover:-translate-y-1 duration-500"
        >
          <FaGitlab />
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-ziro-b49b6127b/"
          className="cursor-pointer text-lg hover:-translate-y-1 duration-500"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="tel:0769"
          className="cursor-pointer text-lg hover:-translate-y-1 duration-500"
        >
          <IoCallSharp />
        </a>
      </ul>
    </div>
  );
};

export default Footer;
