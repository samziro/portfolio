
const Navbar = () => {
  return (
    <nav className='sides fixed w-full py-2 flex items-center justify-between shadow-sm bg-slate-50 font-medium'>
          <h1 className="text-4xl">S.</h1>
          <div className="links flex items-center gap-8 list-none">
              <li>Home</li>
              <li>About me</li>
              <li>Services</li>
              <li>Projects</li>
          </div>
          <button className="ring-1 rin btnPadding rounded-full">Contact me</button>
    </nav>
  )
}

export default Navbar
