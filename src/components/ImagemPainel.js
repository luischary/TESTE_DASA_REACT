import React from 'react'
import FooterImagem from './FooterImagem'
import './style/ImagemPainel.css'
import ModalImage from 'react-modal-image'

export default class ImagemPainel extends React.Component {
    state={
        exibeModal: false,
        contagemAtual: 0
    }

    constructor(props){
        super(props)

        this.modalRef = React.createRef()

        this.exibeModal = this.exibeModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }
    
    exibeModal(e){
        this.modalRef.current.style.display="block"
        this.setState({exibeModal:true}) 
    }

    closeModal(e){
        this.modalRef.current.style.display='none'
        this.setState({ exibeModal: false })
    }
    
    render(){
        const pastaImagens = require.context('../img', true)
        const enderecoImagem = pastaImagens('./' + this.props.nomeImagem)
        const {contagemAtual} = this.state
        return (
            <React.Fragment>
                <div className='imagem-painel'>
                    <ModalImage small={enderecoImagem} large={enderecoImagem} alt={this.props.legenda}/>
                    <FooterImagem legenda={this.props.legenda} inicioContagem={contagemAtual} />
                </div>
                
            </React.Fragment>
        )
    }

}

{/* <img src={enderecoImagem} alt={"Imagem"} key={this.props.srcImg} onClick={this.exibeModal} /> */}

// <div id='janela-modal' ref={this.modalRef} onClick={this.closeModal}>
//     <span id='fecharModal' onClick={this.closeModal}>&times;</span>
//     <div className='legenda-imagem-modal'>{this.props.legenda}</div>
//     <img className='imagem-modal' src={enderecoImagem} />
// </div>

