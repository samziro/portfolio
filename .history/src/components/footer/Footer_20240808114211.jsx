
import { FaGitlab } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:flex md:items-center md:justify-between my-4">
      <p className="text-stone-600 text-center">2024 © All rights reserved.</p>
      <ul className="flex items-center justify-center gap-4 list-none text-stone-600">
        <p> Follow me:</p>
        <li className="cursor-pointer fon">
          <FaGitlab />
        </li>
        <li className="cursor-pointer">
          <IoLogoLinkedin />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
