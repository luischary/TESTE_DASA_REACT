import React , {Component} from 'react'
import './style/WebTest.css'
import enderecoImagemBotao from '../img/icCollapseSection.svg'
import TituloSessao from './TituloSessao'

export default class WebTest extends Component{

    

    constructor(props){
        super(props)

        this.clickCollapse = this.clickCollapse.bind(this)
        this.imagemBotao = React.createRef();
        this.state = {
            visivel: true,
        }
    }

    rotacionaImagem = function(){
        if (this.state.visivel) {
            this.imagemBotao.current.setAttribute('style', 'transform:rotate(270deg)')
        } else {
            this.imagemBotao.current.setAttribute('style', 'transform: rotate(0deg)')
        }
    }

    clickCollapse = function (e){
        let novoVisivel = !this.state.visivel

        this.rotacionaImagem(novoVisivel)
        
        this.setState({visivel: novoVisivel})
    }

    render(){
        const {children} = this.props
        const {visivel} = this.state

        return(
            <React.Fragment>
                <TituloSessao texto={this.props.textoTitulo} />
                <div className='web-test'>
                    <button onClick={this.clickCollapse}>
                        <img src={enderecoImagemBotao} alt='Botao Collapse' ref={this.imagemBotao}/>
                    </button>
                    <h4>Web Test</h4>
                </div>
                <div id="web-test-children">
                    {visivel ? children: null}
                </div>
            </React.Fragment>
        )
    }
}
