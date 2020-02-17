import React from 'react'
import './ColorPalette.css'
import InfoColors from '../info/InfoColors'
import ColorElement from './ColorElement'

const ColorPalette = (props) => {
    return (
        <div className='paleta-cores'>
            <h3 className='titulo-sessao'>Color palette</h3>
            <div className='elementos-paleta-cores'>
                {InfoColors.map(({ name, hexa, rgb }) => <ColorElement key={name} name={name} hexa={hexa} rgb={rgb}/>)}
            </div>
        </div>
        
    )
}

export default ColorPalette