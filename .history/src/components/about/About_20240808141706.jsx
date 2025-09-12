import me from '../../assets/port.png'
import education from '../../assets/edu.gif'
import language from '../../assets/lang.gif'
import projects from '../../assets/project.gif'
import { TbWorldWww } from "react-icons/tb";
import { SiAdobeindesign } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import Tit


const About = () => {

  const qualification = [
  {
    image: education,
    heading:'Education',
    description:'Bsc in Computer Science',
  },
  {
    image:language,
    heading:'Languages',
    description:'HTML, CSS, JavaScript & React Js',
  },
  {
    image:projects,
    heading:'Projects',
    description:'Build more than 4 projects',
  },
]
  return (
    <>
      <Title heading={"About me"} />
      <div className="about h-[100%] py-4 grid grid-cols-1 md:grid-cols-2 place-content-center gap-6">
        <div>
          <img
            className="rounded-lg w-full md:w-3/4 bg-slate-50"
            src={me}
            alt=""
          />
        </div>
        <div className="flex flex-col md:gap-4 items-start gap-6 justify-between">
          <div className="text leading-loose text-stone-600">
            With years of experience in the industry, I have honed my skills in
            HTML, CSS, JavaScript, and modern frameworks like React. My
            portfolio showcases a diverse range of projects.
          </div>
          <div className="qualification grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualification.map((qualification) => (
              <div
                key={qualification}
                className="md:flex md:flex-col items-start justify-between p-3 rounded-lg md:aspect-square cursor-pointer hover:scale-105 duration-500 hover:shadow-md md:bg-slate-50"
              >
                <img
                  className="w-10 text-stone-600"
                  src={qualification.image}
                  alt=""
                />
                <h1 className="font-medium text-stone-700">
                  {qualification.heading}
                </h1>
                <p className="text-stone-600">{qualification.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-stone-700 text-xl">What I do</h1>
            <p className="text-stone-600 flex items-center justify-start gap-2">
              <p className="text-2xl animate-pulse">
                <TbWorldWww />
              </p>
              Front-end Web Development
            </p>
            <p className="text-stone-600 flex items-center justify-start gap-2">
              <p className="text-2xl animate-pulse">
                <CgFigma />
              </p>
              UI/UX Design
            </p>
            <p className="text-stone-600 flex items-center justify-start gap-2">
              <p className="text-xl animate-pulse">
                <SiAdobeindesign />
              </p>
              Graphics Design
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
