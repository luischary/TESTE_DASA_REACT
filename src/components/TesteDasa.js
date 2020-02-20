import React from 'react'
import Cabecalho from './Cabecalho'
import ColorPalette from './ColorPalette'
import TituloSessao from './TituloSessao'
import TextStyleCatalog from './TextStyleCatalog'
import TextStyleItem from './TextStyleItem'
import WebTest from './WebTest'
import PainelImagens from './PainelImagens'
import ImagemPainel from './ImagemPainel'

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
            <PainelImagens>
                <ImagemPainel nomeImagem='imagem1.png' />
                <ImagemPainel nomeImagem='imagem2.png' />
                <ImagemPainel nomeImagem='imagem3.png' />  
            </PainelImagens>
        </WebTest>
        
    </React.Fragment>
)
export default TesteDasa