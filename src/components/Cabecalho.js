import React from 'react'
import './Cabecalho.css'
import imagemIcone1 from '../img/icTwitter.svg'
import imagemIcone2 from '../img/icFacebook.svg'

const Cabecalho = (props) => {
    return (
        <div className='cabecalho'>
            <h1>Nexa Frontent Test</h1>
            <h3>Web, 1x</h3>
            <div className='links-cabecalho'>
                <a href='#'>
                    <img src={imagemIcone1} className='icone1'/>
                </a>
                <a href='#'>
                    <img src={imagemIcone2} className='icone2' />
                </a>
            </div>
        </div>
    )
}

export default Cabecalho