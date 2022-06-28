import './doces.css'
import Brigadeiro from '../assets/brigadeiro.png' 
import Beijinho from '../assets/beijinho.png'
import Pacoca from '../assets/Brigadeiro-pacoca.jpg'
import Bolo from '../assets/bolor-red.jpg'
import BemCasado from '../assets/bem-casado.jpg'
import BoloVulcao from '../assets/bolo-chocolate.jpg'
const Doces = () =>{
    return (
        <>
            <h2 className="h2-doces">Doces</h2>
            <h1 className="h1-doces">Nossos doces mais vendidos</h1>
            <div className="container-doces">
                <div>
                    <img src={Brigadeiro}/>
                    <div className="container-desc">
                        <p className="titulo">Brigadeiro Tradicional</p>
                        <p className="valor">Valor: R$ 5,00 - 10 unids</p>
                    </div>
                </div>
                
                <div>
                <img src={Beijinho}/>
                    <div className="container-desc">
                        <p className="titulo">Beijinho</p>
                        <p className="valor">Valor: R$ 5,00 - 10 unids</p>
                    </div>
                </div>

                <div>
                <img src={Pacoca}/>
                    <div className="container-desc">
                        <p className="titulo">Brigadeiro de paçoca</p>
                        <p className="valor">Valor: R$ 5,00 - 10 unids</p>
                    </div>
                </div>

                <div>
                <img src={Bolo}/>
                    <div className="container-desc">
                        <p className="titulo">Bolo Red Velvet</p>
                        <p className="valor">Valor: R$ 15,00 - 1 fatia</p>
                    </div>
                </div>

                <div>
                <img src={BemCasado}/>
                    <div className="container-desc">
                        <p className="titulo">Bem Casado</p>
                        <p className="valor">Valor: R$ 5,00 - 10 unids</p>
                    </div>
                </div>

                <div>
                <img src={BoloVulcao}/>
                    <div className="container-desc">
                        <p className="titulo">Bolo Vulcão de chocolate</p>
                        <p className="valor">Valor: R$ 10,00 - 1 fatia</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Doces;