
const Navbar = () => {
  return (
    <nav className="sides text-stone-600 fixed w-full py-2 md:flex md:items-center md:justify-between shadow-sm bg-slate-50 font-medium">
      <h1 className="text-4xl">S.</h1>
      <div className="links hidden grid pb-4 grid-cols-1 gap-2 md:flex md:items-center md:gap-8 list-none md:pb-0">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About me</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Projects</li>
      </div>
      <button className="ring-1 ring-neutral-400 btnPadding rounded-full">
        Contact me
      </button>
    </nav>
  );
}

export default Navbar
