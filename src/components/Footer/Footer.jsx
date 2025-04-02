import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Footer.css"
import { faEnvelope, faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
        <footer className="main-footer">
            <section className="social-network">
                <div>
                <FontAwesomeIcon icon={faFacebook} />
                FACEBOOK
                </div>
                <div>
                <FontAwesomeIcon icon={faInstagram} />
                INSTAGRAM
                </div>
                <div>
                <FontAwesomeIcon icon={faYoutube} />
                YOUTUBE
                </div>
            </section>
            <section className="logo-footer">
                <img alt="Logo-Burn-It" src="/images/LOGO-BURN-IT-2024-blanco.png" />
            </section>
            <section className="info-footer">
                <div>
                <FontAwesomeIcon icon={faLocationArrow} />
                Migueletes 1268, CABA
                </div>
                <div>
                <FontAwesomeIcon icon={faPhone}/>
                (011) 2788-4581
                </div>
                <div>
                <FontAwesomeIcon icon={faEnvelope} />
                burnitactivewear@gmail.com
                </div>
                <div>© 2024, BURN IT ACTIVEWEAR</div>
            </section>
        </footer>
    )
}
