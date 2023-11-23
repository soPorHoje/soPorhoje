import './App.css'
import Biografia from './components/Biografia'
import Footer from './components/Footer'
import Youtube from './components/Youtube'
import Spotify from './components/spotify'

function App() {

  return (
    <>
      <header className='divHeader'>
        <img src='/titulo.png' className='header'></img>
      </header>
      <main className='main'>
        <Biografia />
        <Spotify />
        <Youtube />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
