import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Title from './components/title/Title'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='sides'>
        <Header />
        <Title heading={'About me'}/>
        <Title heading={'Contact me'}/>
        <Contact />
        
      </div>
    </>
  )
}

export default App
