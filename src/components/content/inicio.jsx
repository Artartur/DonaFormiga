import './inicio.css'

const Inicio = () =>{
    return(
        <div>
            <div className="vazio"></div>
            <div className="container">
            <div className="textos">
            <h4>BEM VINDOS A DONA FORMIGA DOCERIA!</h4>
            <h1>A melhor doceria da região</h1>
            <p>Não fornecemos apenas doces, fornecemos o amor, a paixão e o 
                <p>prazer para os nossos clientes saborear.</p></p>
            <button><h3>REALIZE SEU PEDIDO</h3></button>
            </div>
            <div className="carrossel">
            <h3>|Carrossel|</h3>
            </div>
            </div>

            <div className="card">
                <div className="card-texto">
                    <div>
                    <h1>+1000</h1>
                    <p>Clientes atendidos</p>
                    </div>
                    <p></p>
                    <div>
                    <h1>+20</h1>
                    <p>Docinhos deliciosos</p>
                    </div>
                    <p></p>
                    <div>
                    <h1>+5</h1>
                    <p>Docerias na região</p>
                    </div>
                    <p></p>
                    <div>
                    <h1>+7</h1>
                    <p>Anos no mercado</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio;