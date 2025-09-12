import me from '../../assets/port.png'

const About = () => {
  return (
    <div className='grid grid-cols-2 place-content-center gap-6'>
      <div><img className='rounded-lg w-3/4 bg-slate-50' src={me} alt="" /></div>
      <div>
        <div className="text"></div>
        <div className="qualification"></div>
        <h1>Tools I us</h1>
      </div>
    </div>
  )
}

export default About
