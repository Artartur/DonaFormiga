import './content.css'
import Inicio from './inicio.jsx'
import Doces from './doces.jsx'
import Sobre from './sobre.jsx'

const Content = () =>{

    return(
        <>
            <div className="container-content">
                <Inicio/>
                <Doces/>
                <Sobre/>
            </div>
        </>
    )
}

export default Content;