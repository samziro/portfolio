
const Navbar = () => {
  return (
    <nav className='sides py-2 flex items-center justify-between shadow-sm bg-slate-50'>
          <h1 className="text-4xl">S.</h1>
          <div className="links flex items-center gap-8 list-none">
              <li>Home</li>
              <li>About me</li>
              <li>Services</li>
              <li>Projects</li>
          </div>
          <button className="ring ">Contact me</button>
    </nav>
  )
}

export default Navbar
