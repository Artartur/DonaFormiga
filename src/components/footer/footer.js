import './footer.css';
import Email from './../assets/email.svg';
import Face from './../assets/face.svg';
import Insta from './../assets/insta.svg';
import Whats from './../assets/whats.svg';
function Footer() {
  return (
    <>
        <footer> 
            <div className="vazio-footer"></div>
            <div className="container-footer">
              <div className= "card-footer">
                <div className="card-text-footer">
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
        </footer>
    </>
  )
}

export default Footer