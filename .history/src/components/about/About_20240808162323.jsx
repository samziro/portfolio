import me from "../../assets/port.png";
import education from "../../assets/edu.gif";
import language from "../../assets/lang.gif";
import projects from "../../assets/project.gif";
import { TbWorldWww } from "react-icons/tb";
import { SiAdobeindesign } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const qualifications = [
  {
    id: "education",
    image: education,
    heading: "Education",
    description: "BSc in Computer Science",
  },
  {
    id: "languages",
    image: language,
    heading: "Languages",
    description: "HTML, CSS, JavaScript & React JS",
  },
  {
    id: "projects",
    image: projects,
    heading: "Projects",
    description: "Built more than 4 projects",
  },
];

const QualificationCard = ({ image, heading, description }) => (
  <div
    className="md:flex md:flex-col items-start justify-between p-3 rounded-lg md:aspect-square cursor-pointer hover:scale-105 duration-500 hover:shadow-md md:bg-slate-50"
    data-aos="zoom-in-up"
  >
    <img className="w-10" src={image} alt={heading} />
    <h1 className="font-medium text-stone-700">{heading}</h1>
    <p className="text-stone-600">{description}</p>
  </div>
);

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="about h-[100%] py-4 grid grid-cols-1 md:grid-cols-2 place-content-center gap-6">
      <div>
        <img
          className="rounded-lg w-full md:w-3/4 bg-slate-50"
          src={me}
          alt="Portrait of the author"
          data-aos="zoom-in-up"
        />
      </div>
      <div className="flex flex-col md:gap-4 items-start gap-6 justify-between">
        <div className="text leading-loose text-stone-600">
          With years of experience in the industry, I have honed my skills in
          HTML, CSS, JavaScript, and modern frameworks like React. My portfolio
          showcases a diverse range of projects.
        </div>
        <div className="qualification grid grid-cols-1 md:grid-cols-3 gap-6">
          {qualifications.map((qual) => (
            <QualificationCard
              key={qual.id} // Use unique ID here
              image={qual.image}
              heading={qual.heading}
              description={qual.description}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-stone-700 text-xl">What I do</h1>
          <p className="text-stone-600 flex items-center justify-start gap-2">
            <TbWorldWww className="text-2xl animate-pulse" />
            Front-end Web Development
          </p>
          <p className="text-stone-600 flex items-center justify-start gap-2">
            <CgFigma className="text-2xl animate-pulse" />
            UI/UX Design
          </p>
          <p className="text-stone-600 flex items-center justify-start gap-2">
            <SiAdobeindesign className="text-xl animate-pulse" />
            Graphics Design
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
