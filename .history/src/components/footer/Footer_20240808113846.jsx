
import { PiGitlabLogoSimpleThin } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:flex md:items-center md:justify-between my-4">
      <p className="text-stone-600 text-center">2024 © All rights reserved.</p>
      <ul className="flex items-center justify-center gap-4 list-none text-stone-600">
        <li className="cursor-pointer">
          <PiGitlabLogoSimpleThin />
        </li>
        <li className="cursor-pointer">
          <SlSocialLinkedin />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
