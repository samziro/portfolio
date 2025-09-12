import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Title from './components/title/Title'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='sides'>
        <Header />
        <Title heading={'About me'} />
        <About />
        <Title
        <Title heading={'Contact me'}/>
        <Contact />
        <hr />
        <Footer/>
      </div>
    </>
  )
}

export default App
