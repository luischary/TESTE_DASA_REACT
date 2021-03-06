import React from 'react'
import './style/ColorPalette.css'
import InfoColors from '../info/InfoColors'
import ColorElement from './ColorElement'
import TituloSessao from './TituloSessao'


const ColorPalette = (props) => {
    return (
        <div className='paleta-cores'>
            
            <TituloSessao texto={props.textoTitulo} />

            <div className='elementos-paleta-cores'>
                {InfoColors.map(({ name, hexa, rgb }) => <ColorElement key={name} name={name} hexa={hexa} rgb={rgb}/>)}
            </div>
        </div>
        
    )
}

export default ColorPalette