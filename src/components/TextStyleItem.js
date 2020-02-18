import React from 'react'
import './style/TextStyleItem.css'

const TextStyleItem = (props) => {
    return (
        <React.Fragment>
            <p className='text-style-titulo'>{props.title}</p>
            <p className='text-style-subtitulo'>{props.fontInfo}></p>
            <p className='text-style-detalhe'>{props.detail}</p>
        </React.Fragment>
    )
}

export default TextStyleItem