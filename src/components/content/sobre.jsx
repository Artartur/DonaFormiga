import {About} from '../styles/content-styles'
import Confeiteiro from './../../assets/confeiteiro.jpg'

function Sobre() {
  return (
    <> 
        <About>
            <div className="imagem">
                <img src={Confeiteiro}/>
            </div>
            <div className="texto">
                <h2>Sobre nós</h2>
                <h1>Entenda quem nós somos</h1>
                <div className="div-texto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        do eiusmod tempor incididunt ut labore et dolore magna 
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ut aliquip ex ea commodo consequat. Duis aute irure
                        reprehenderit in voluptate velit esse cillum dolore eu.
                        Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia.
                        </p>
                </div>
            </div>
        </About>
    </>
  )
}

export default Sobre;