import {Footer} from '../styles/footer-styles'
import Email from './../../assets/email.svg';
import Face from './../../assets/face.svg';
import Insta from './../../assets/insta.svg';
import Whats from './../../assets/whats.svg';

function Rodape() {
  return (
    <>
        <Footer> 
            <div className="vazio"></div>
            <div className="container">
              <div className= "card">
                <div className="card-text">
                    <div>
                      <img src={Face}/>
                      <p>Facebook/</p>
                    </div>
                    <p></p>
                    <div>
                    <img src={Whats}/>
                      <p>Whatsapp</p>
                    </div>
                    <p></p>
                    <div>
                    <img src={Insta}/>
                      <p>@Instagram</p>
                    </div>
                    <p></p>
                    <div>
                    <img src={Email}/>
                      <p>email@email</p>
                    </div>
                </div>
              </div>
            </div>
        </Footer>
    </>
  )
}

export default Rodape;