import React from 'react'
import './Youtube.css'

const Youtube = () => {
  return (
    <div className='youtube'>
        <h1 className='tituloYoutube'>SÓ POR HOJE</h1>

        <iframe
          className='videoYt' 
          src="https://www.youtube.com/embed/mkSDxzXsklg" 
          title="Só por hoje" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
    </div>
  )
}

export default Youtube