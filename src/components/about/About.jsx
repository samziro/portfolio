import me from "../../assets/port.png";
import education from "../../assets/edu.gif";
import language from "../../assets/lang.gif";
import projects from "../../assets/project.gif";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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
    heading: "Tech Stack",
    description: "MERN | Docker | GitLab CI/CD | Kubernetes",
  },
  {
    id: "projects",
    image: projects,
    heading: "Projects",
    description: "Delivered 2+ full-scale production websites",
  },
];

const QualificationCard = ({ image, heading, description }) => (
  <div
    className="md:flex md:flex-col items-start justify-between p-4 rounded-xl bg-slate-50 hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer"
    data-aos="zoom-in-up"
  >
    <img className="w-12 mb-3" src={image} alt={heading} />
    <h2 className="font-semibold text-stone-700 text-lg">{heading}</h2>
    <p className="text-stone-600 text-sm">{description}</p>
  </div>
);

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 600, once: true });
  }, []);

  return (
    <section
      id="about"
      className="about py-10 md:py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      {/* Image Block */}
      <div data-aos="zoom-in-up">
        <img
          className="rounded-2xl w-full md:w-3/4 mx-auto shadow-lg bg-slate-50"
          src={me}
          alt="Samuel Ziro portrait"
        />
      </div>

      {/* Content Block */}
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-medium text-stone-700">
          About Me
        </h2>
        <p className="text-base leading-loose text-stone-600">
          I’m a multi-skilled developer and designer, passionate about
          transforming ideas into scalable digital experiences. From full-stack
          applications to containerized DevOps deployments and engaging brand
          visuals — I deliver with quality and precision.
        </p>

        {/* Quals Grid */}
        <div className="qualification grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {qualifications.map((qual) => (
            <QualificationCard
              key={qual.id}
              image={qual.image}
              heading={qual.heading}
              description={qual.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
