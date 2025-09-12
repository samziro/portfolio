import me from '../../assets/port.png'
import download from '../../assets/download-icon.png'
import background from '../../assets/bg.svg'


const Header = () => {
  return (
    <div
      className="hero h-svh flex flex-col items-center justify-center gap-4 b"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img
        className="w-40 rounded-full bg-slate-50 aspect-square"
        src={me}
        alt="me_image"
      />
      <h1 className="text-lg md:text-xl text-stone-600">
        Hello! I am Samuel Ziro
      </h1>
      <h1 className="text-3xl text-center md:text-6xl text-stone-600">
        fronted web developer
      </h1>
      <h1 className="lg md:w-3/4 text-center leading-loose text-stone-600">
        {`Transform your vision into reality with a skilled frontend developer.
        Specializing in responsive, user-friendly designs that boost engagement
        and enhance user experience. Let's create something amazing together!`}
      </h1>
      <div className="flex items-center gap-10">
        <button className="px-4 py-2 cursor-pointer text-stone-600 bg-slate-50 ring-1 ring-neutral-400 rounded-full">
          Contact me
        </button>
        <button className="px-4 py-2 cursor-pointer text-stone-600 bg-slate-50 ring-1 ring-neutral-400 rounded-full flex items-center gap-2">
          Resume <img className="w-4" src={download} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Header
