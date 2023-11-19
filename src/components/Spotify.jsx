import React from 'react'
import './Spotify.css'

const Spotify = () => {
    
    return (
        <div className='spotify'>
            <h1 className='titlePlaylists'>Um pouco do gosto musical</h1>
            <div className='vibesPria'>
                <iframe 
                    className= 'iframeStyleLeft'
                    src="https://open.spotify.com/embed/playlist/19s3YToog8JibEjj1Plpo2?utm_source=generator&theme=0" 
                    height = "352"
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
                <p>Quando estiver a fim de relaxar escutando musicas de qualidade na praia...</p>
            </div>
            <div className='vibesAleatoria'>
                <p>Aquele momento que tu ta fazendo coisas aleatórias e bate a vontade de escutar algo...</p>
                <iframe 
                    className= 'iframeStyleRight'
                    src="https://open.spotify.com/embed/playlist/7Dxff1eSDxzjYoWKNyCocx?utm_source=generator&theme=0" 
                    height = "352"
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
            <div className='rockzin'>
                <iframe 
                    className= 'iframeStyleLeft'
                    src="https://open.spotify.com/embed/playlist/2mZF5ObYoa2V0AwjMWw65H?utm_source=generator&theme=0" 
                    height = "352"
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
                <p>E é claro que o bom e velho rock pra levantar o astral ou te afundar de vez não poderia faltar, né?</p>
            </div>
        </div>
    )
}

export default Spotify