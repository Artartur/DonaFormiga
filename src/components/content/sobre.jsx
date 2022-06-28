import './sobre.css'
import Confeiteiro from '../assets/confeiteiro.jpg'

function Sobre() {
  return (
    <>
        
        <div className="container-sobre">
            <div className="imagem-sobre">
                <img src={Confeiteiro}/>
            </div>
            <div className="texto-sobre">
                <h2 className="h2-sobre">Sobre nós</h2>
                <h1 className="h1-sobre">Entenda quem nós somos</h1>
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
        </div>
    </>
  )
}

export default Sobre;