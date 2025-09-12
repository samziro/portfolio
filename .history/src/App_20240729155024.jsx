import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='sides'>
        <Header/>
      </div>
    </>
  )
}

export default App
