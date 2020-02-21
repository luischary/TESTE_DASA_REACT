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

        <div class='principal'>
            < ColorPalette textoTitulo='Color pallete' />

            <TextStyleCatalog textoTitulo='Text style catalog'>
                <TextStyleItem title='Text Style' fontInfo='Montserrat, Bold, 52px' detail='Center'/>
            </TextStyleCatalog>

            <WebTest textoTitulo='Designs'>
                <PainelImagens>
                    <ImagemPainel nomeImagem='imagem1.png' legenda='Dreamshare_desktop'/>
                    <ImagemPainel nomeImagem='imagem2.png' legenda='Tablet Portrait'/>
                    <ImagemPainel nomeImagem='imagem3.png' legenda='Mobile Portrait'/>  
                </PainelImagens>
            </WebTest>
        </div>
        
    </React.Fragment>
)
export default TesteDasa