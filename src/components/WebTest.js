import React , {Component} from 'react'
import './style/WebTest.css'
import imagemBotao from '../img/icCollapseSection.svg'

export default class WebTest extends Component{

    

    constructor(props){
        super(props)

        this.clickCollapse = this.clickCollapse.bind(this)
        this.state = {
            visivel: true,
        }
    }

    clickCollapse = function (e){
        let novoVisivel = !this.state.visivel
        this.setState({visivel: novoVisivel})
    }

    render(){
        const {children} = this.props
        const {visivel} = this.state

        return(
            <React.Fragment>
                <div className='web-test'>
                    <button onClick={this.clickCollapse}>
                        <img src={imagemBotao} alt='Botao Collapse' />
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
