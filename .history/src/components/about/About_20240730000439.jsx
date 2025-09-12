import me from '../../assets/port.png'
import education from '../../assets/edu-icon.png'
import language from '../../assets/code-icon.png'
import projects from '../../assets/project-icon.png'

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
    <div className="grid grid-cols-2 place-content-center gap-6">
      <div>
        <img className="rounded-lg w-3/4 bg-slate-50" src={me} alt="" />
      </div>
      <div>
        <div className="text">
          With years of experience in the industry, I have honed my skills in
          HTML, CSS, JavaScript, and modern frameworks like React. My portfolio
          showcases a diverse range of projects.
        </div>
        <div className="qualification grid grid-cols-3 gap-7">
          {qualification.map((qualification) => (
            <div
              key={qualification}
              className="flex flex-col items-start justify-between ring-1 ring-neutral-400 p-3 rounded-lg aspect-square cursor-pointer hover:translate-y-1 transition-500 hover:shadow-md"
            >
              <img className='w-6' src={qualification.image} alt="" />
              <h1 className='font-medium'>{qualification.heading}</h1>
              <p>{qualification.description}</p>
            </div>
          ))}
        </div>
        <h1>Tools I us</h1>
      </div>
    </div>
  );
}

export default About
