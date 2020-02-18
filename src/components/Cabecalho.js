import React from 'react'
import './style/Cabecalho.css'
import imagemIcone1 from '../img/icTwitter.svg'
import imagemIcone2 from '../img/icFacebook.svg'

const Cabecalho = (props) => {
    return (
        <div className='cabecalho'>
            <h1>Nexa Frontent Test</h1>
            <h2>Web, 1x</h2>
            <div className='links-cabecalho'>
                <a href='http://google.com.br'>
                    <img src={imagemIcone1} className='icone1' alt='Icone compartilhar no Twitter'/>
                </a>
                <a href='http://google.com.br'>
                    <img src={imagemIcone2} className='icone2' alt='Icone compartilhar no Facebook'/>
                </a>
            </div>
        </div>
    )
}

export default Cabecalho