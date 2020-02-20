import React, {Component} from 'react'
import './style/FooterImagem.css'

export default class FooterImagem extends Component{

    state={
        contagem: 1,
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
                <spam>{this.props.legenda}</spam>
                <div className='contador'>
                    <spam className='contagem-favorito'>{contagem}</spam>
                    <a href="#" class='coracao' onClick={this.clickCoracao}>
                        {clicou ? <i class='fas fa-heart'></i> : <i class='far fa-heart'></i> }
                    </a>
                </div>
            </div>
        )
    }
}