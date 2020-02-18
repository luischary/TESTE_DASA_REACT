import React from 'react'
import './style/WebTest.css'
import imagemBotao from '../img/icCollapseSection.svg'

const WebTest = (props) =>{
    function clickCollapse(e){
        console.log('Clicou')
    }

    return (
        <React.Fragment>
            <div className='web-test'>
                <button onClick={clickCollapse}>
                    <img src={imagemBotao} alt='Botao Collapse'/>
                </button>
                <h4>Web Test</h4>
            </div>
            {props.children}
        </React.Fragment>
    )
}

export default WebTest