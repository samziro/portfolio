import me from '../../assets/port.png'


const Header = () => {
  return (
    <div className="h-full gap-12 flex flex-col items-center justify-center">
      <img
        className="w-36 rounded-full bg-slate-50 aspect-square"
        src={me}
        alt="me_image"
      />
      <h1 className="text-xl">Hello! I am Samuel Ziro</h1>
      <h1 className="text-6xl">fronted web developer</h1>
      <h1 className="lg w-3/4 text-center">
        {`Transform your vision into reality with a skilled frontend developer.
        Specializing in responsive, user-friendly designs that boost engagement
        and enhance user experience. Let's create something amazing together!`}
      </h1>
      <div className="flex items-center gap-12">
        <button className="px-4 py-2 ring-1 rounded-full">Contact me</button>
        <button className="px-4 py-2 ring-1 rounded-full">Resume</button>
      </div>
    </div>
  );
}

export default Header
