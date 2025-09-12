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
        <Title />
        <Title h/>
        <Contact/>
      </div>
    </>
  )
}

export default App
