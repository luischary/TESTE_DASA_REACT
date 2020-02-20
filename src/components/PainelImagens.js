import React from 'react'
import './style/PainelImagens.css'

const PainelImagens = (props) => {
    return(
        <div className='painel-imagens'>
            {props.children}
        </div>
    )
}

export default PainelImagens