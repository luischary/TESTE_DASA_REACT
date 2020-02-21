import React from 'react'
import FooterImagem from './FooterImagem'
import './style/ImagemPainel.css'
import ModalImage from 'react-modal-image'

export default class ImagemPainel extends React.Component {
    state={
        contagemAtual: 0
    }

    constructor(props){
        super(props)

        this.modalRef = React.createRef()

        this.textoCurtidas = this.textoCurtidas.bind(this)
        this.atualizaContagem = this.atualizaContagem.bind(this)
    }

    atualizaContagem(contagem){
        this.setState({contagemAtual: contagem})
    }

    textoCurtidas(){
        const {contagemAtual} = this.state
        if(contagemAtual > 1){
            return `${this.props.legenda} - ${contagemAtual} curtidas!`
        }else{
            return `${this.props.legenda} - ${contagemAtual} curtida`
        }
     
    }
    
    render(){
        const pastaImagens = require.context('../img', true)
        const enderecoImagem = pastaImagens('./' + this.props.nomeImagem)
        const {contagemAtual} = this.state
        return (
            <React.Fragment>
                <div className='imagem-painel'>
                    <ModalImage small={enderecoImagem} large={enderecoImagem} alt={this.textoCurtidas()}/>
                    <FooterImagem legenda={this.props.legenda} inicioContagem={contagemAtual} atualizaContagem={this.atualizaContagem}/>
                </div>
                
            </React.Fragment>
        )
    }

}

