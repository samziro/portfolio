import me from '../../assets/port.png'

const Header = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <img className='w-36 rounded-full bg-slate-50 aspect-square' src={me} alt="" />
      <h1 className='tex'>Hello! I am Samuel Ziro</h1>
      <h1 className='text-5xl'>fronted web developer</h1>
      <h1>
        {`Transform your vision into reality with a skilled frontend developer.
        Specializing in responsive, user-friendly designs that boost engagement
        and enhance user experience. Let's create something amazing together!`}
      </h1>
    </div>
  );
}

export default Header
