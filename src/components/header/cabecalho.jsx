import {Header} from '../styles/header-style'

const Cabecalho = () =>{
    return(
        <>
        <div>    
            <Header>
                <h3><a href="#">Dona Formiga</a></h3>
                <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Sobre</a>
                    <a href="#">Doces</a>
                    <a href="#">Contatos</a>
                </nav>
                <h3 className="pedido"><a href="#" >Realizar Pedido</a></h3>
            </Header>

        </div>
        </>
    )
}

export default Cabecalho;