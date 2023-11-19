import './App.css'
import Biografia from './components/Biografia'
import Youtube from './components/Youtube'
import Spotify from './components/spotify'

function App() {

  return (
    <>
      <header>
        <img src='/titulo.png' className='header'></img>
      </header>
      <main className='main'>
        <Biografia />
        <Spotify />
        <Youtube />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
