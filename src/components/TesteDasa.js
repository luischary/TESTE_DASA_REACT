import React from 'react'
import Cabecalho from './Cabecalho'
import ColorPalette from './ColorPalette'
import TituloSessao from './TituloSessao'
import TextStyleCatalog from './TextStyleCatalog'
import TextStyleItem from './TextStyleItem'
import WebTest from './WebTest'

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
        <WebTest>
            <h1>Teste</h1>
        </WebTest>
        
    </React.Fragment>
)
        
        //     <PainelImagens>
        //         <ImagemPainel srcImagem='../img/imagem1.png' />
        // <ImagemPainel srcImagem='../img/imagem2.png' />
        // <ImagemPainel srcImagem='../img/imagem3.png' />  
        //     </PainelImagens>  
export default TesteDasa