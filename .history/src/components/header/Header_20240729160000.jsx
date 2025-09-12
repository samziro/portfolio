import me from '../../assets/port.png'

const Header = () => {
  return (
    <div className="h-[90dhv]">
      <img className='w-36 rounded-full bg-slate-50 aspect-square' src={me} alt="" />
      <h1>Hello! I am Samuel Ziro</h1>
      <h1>fronted web developer</h1>
      <h1>
        {`Transform your vision into reality with a skilled frontend developer.
        Specializing in responsive, user-friendly designs that boost engagement
        and enhance user experience. Let's create something amazing together!`}
      </h1>
    </div>
  );
}

export default Header
