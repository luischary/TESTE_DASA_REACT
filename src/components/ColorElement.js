import React from 'react'
import './ColorElement.css'

const ColorElement = (props) =>{
    return (
        <div className='elemento-paleta'>
            <div className={`bola-cor color-${props.name.toLowerCase().split(' ').join('-')}`}>
            </div>
            <div className='info-paletta'>
                <p className='nome-cor'>{props.name}</p>
                <p className='cor-exa'>{props.hexa}</p>
                <p className='cor-rgb'>{props.rgb}</p>
            </div>
        </div>
    )
}

export default ColorElement