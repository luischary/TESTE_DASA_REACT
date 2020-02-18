import React from 'react'
import Cabecalho from './Cabecalho'
import ColorPalette from './ColorPalette'
import TituloSessao from './TituloSessao'
import TextStyleCatalog from './TextStyleCatalog'
import TextStyleItem from './TextStyleItem'

const TesteDasa = (props) => (
    <React.Fragment>
        <Cabecalho />

        <TituloSessao texto='Color palette' />
        < ColorPalette />

        <TituloSessao texto='Text style catalog'/>
        <TextStyleCatalog>
            <TextStyleItem title='Text Style' fontInfo='Montserrat, Bold, 52px' detail='Center'/>
        </TextStyleCatalog>

        <TituloSessao texto='Designs'/>
        
    </React.Fragment>
)

    // <TextStyleCatalog>
    //     <TextStyleItem />
    // </TextStyleCatalog>

    // <Designs>
    //     <DesignItem />
    // </Designs>
export default TesteDasa