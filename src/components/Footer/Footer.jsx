import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Footer.css"
import { faEnvelope, faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
        <footer className="main-footer">
            <section className="social-network">
                <div className="redes">
                    <FontAwesomeIcon className="icon" icon={faFacebook}/>
                    FACEBOOK
                </div>
                <div className="redes">
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                    INSTAGRAM
                </div>
                <div className="redes">
                    <FontAwesomeIcon className="icon" icon={faYoutube} />
                    YOUTUBE
                </div>
            </section>
            <section className="logo-footer">
                <img alt="Logo-Burn-It" src="/images/LOGO-BURN-IT-2024-blanco.png" />
            </section>
            <section className="info-footer">
                <div>
                <FontAwesomeIcon className="icon" icon={faLocationArrow} />
                    Migueletes 1268, CABA
                </div>
                <div>
                <FontAwesomeIcon className="icon" icon={faPhone}/>
                    (011) 2788-4581
                </div>
                <div>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    burnitactivewear@gmail.com
                </div>
                <div>© 2024, BURN IT ACTIVEWEAR</div>
            </section>
        </footer>
    )
}
