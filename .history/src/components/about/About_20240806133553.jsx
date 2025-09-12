import me from '../../assets/port.png'
import education from '../../assets/edu.gif'
import language from '../../assets/lang.gif'
import projects from '../../assets/project.gif'
import web_icon from '../../assets/web.gif'

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
    description:'HTML, CSS, JavaScript React Js',
  },
  {
    image:projects,
    heading:'Projects',
    description:'Build more than 4 projects',
  },
]
  return (
    <div className="about h-[100%] py-4 grid grid-cols-1 md:grid-cols-2 place-content-center gap-6">
      <div>
        <img className="rounded-lg w-full md:w-3/4 bg-slate-50" src={me} alt="" />
      </div>
      <div className="flex flex-col items-start justify-between">
        <div className="text leading-loose text-stone-600">
          With years of experience in the industry, I have honed my skills in
          HTML, CSS, JavaScript, and modern frameworks like React. My portfolio
          showcases a diverse range of projects.
        </div>
        <div className="qualification grid grid-cols-1 md:grid-cols-3 gap-7">
          {qualification.map((qualification) => (
            <div
              key={qualification}
              className="md:flex md:flex-col items-start justify-between ring-1 ring-neutral-400 p-3 rounded-lg md:aspect-square cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md"
            >
              <img className="w-10" src={qualification.image} alt="" />
              <h1 className="font-medium text-stone-700">
                {qualification.heading}
              </h1>
              <p className="text-stone-600">{qualification.description}</p>
            </div>
          ))}
        </div>
        <h1 className="font-medium text-stone-700 text-xl">What I do</h1>
        <p className="text-stone-600 flex items-center justify-center gap-2"><img className='w-8' src={web_icon} alt="" />Web Design and Development</p>
        <p className="text-stone-600">UI/UX Design</p>
        <p className="text-stone-600">Graphics Design</p>
      </div>
    </div>
  );
}

export default About
