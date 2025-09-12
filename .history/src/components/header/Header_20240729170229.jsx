import me from '../../assets/port.png'
import download from '../../assets/download-icon.png'


const Header = () => {
  return (
    <div className="h-[90dvh] mx-auto gap-6 flex flex-col ">
      <img
        className="w-40 rounded-full bg-slate-50 aspect-square"
        src={me}
        alt="me_image"
      />
      <h1 className="text-xl">Hello! I am Samuel Ziro</h1>
      <h1 className="text-6xl">fronted web developer</h1>
      <h1 className="lg w-3/4 text-center leading-loose">
        {`Transform your vision into reality with a skilled frontend developer.
        Specializing in responsive, user-friendly designs that boost engagement
        and enhance user experience. Let's create something amazing together!`}
      </h1>
      <div className="flex items-center gap-10">
        <button className="px-4 py-2 cursor-pointer bg-slate-50 ring-1 ring-neutral-400 rounded-full">
          Contact me
        </button>
        <button className="px-4 py-2 cursor-pointer bg-slate-50 ring-1 ring-neutral-400 rounded-full flex items-center gap-2">
          Resume <img className="w-4" src={download} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Header
