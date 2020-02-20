import React from 'react'
import './style/ImagemPainel.css'
import FooterImagem from './FooterImagem'

const ImagemPainel = (props) =>{
    const pastaImagens = require.context('../img', true)
    const enderecoImagem = pastaImagens('./' + props.nomeImagem)
    return(
        <div className='imagem-painel'>
            <img src={enderecoImagem} alt={"Imagem"} key={props.srcImg}/> 
            <FooterImagem legenda={props.legenda} />
        </div>
    )
}

export default ImagemPainel