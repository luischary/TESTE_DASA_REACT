import React from 'react'
import './style/TextStyleCatalog.css'
import TituloSessao from './TituloSessao'

const TextStyleCatalog = (props) => {
    return (
        <div className='text-style-content'>
            <TituloSessao texto={props.textoTitulo} />

            {props.children}
        </div>
    )
}

export default TextStyleCatalog