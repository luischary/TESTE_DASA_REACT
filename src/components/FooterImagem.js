import React, {Component} from 'react'
import './style/FooterImagem.css'

export default class FooterImagem extends Component{

    state={
        contagem: this.props.inicioContagem,
        clicou: false
    }

    constructor(props){
        super(props)

        this.clickCoracao = this.clickCoracao.bind(this)
    }

    clickCoracao(e){
        e.preventDefault()
        const novaContagem = this.state.contagem + 1

        this.setState({contagem: novaContagem, clicou:true})
    }

    render(){

        const {contagem, clicou} = this.state

        return(
            <div className='footer-imagem'>
                <span>{this.props.legenda}</span>
                <div className='contador'>
                    <span className='contagem-favorito'>{contagem}</span>
                    <a href="#" className='coracao' onClick={this.clickCoracao}>
                        {clicou ? <i className='fas fa-heart'></i> : <i className='far fa-heart'></i> }
                    </a>
                </div>
            </div>
        )
    }
}