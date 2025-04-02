import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './AcercaDe.css';

export default function AcercaDe() {
    return (
        <main className="acercaDe">
            <article className="mision">
                <div>
                <h1 className="mision-title">
                    Nuestra misión
                    <hr />
                </h1>
                <p className="mision-text">
                    Nuestro pequeño equipo de confeccionistas trabajan cada una de estas
                    prendas con muchísimo amor y paciencia. La historia detrás de cada
                    taller nos motiva a seguir brindando trabajo bajo condiciones justas y
                    correctas. La principal motivación es siempre poder brindar un producto
                    de calidad y que sea cómodo de usar. Siempre intentando conocer tus
                    necesidades y bienestar.
                </p>
                </div>
            </article>
            <article className="integrantes">
                <h1 className="mision-title">
                Integrantes
                <hr />
                </h1>
                <div className="us-box">
                <img
                    alt="Foto integrante principal"
                    className="foto"
                    src="/images/Israel Avila.jpg"
                />
                <div className="israel">
                    <h2>Israel Avila</h2>
                    <span className="texto">
                    Programador Full-Stack en proceso, analista financiero, licenciado en
                    comercio exterior e interprete.
                    </span>
                    <div className="social-network">
                    <div>
                        <FontAwesomeIcon icon={faFacebook}/>
                        IsraelAvilaF
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} />
                        IsraelAvilaF
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} />
                        Israel Avila
                    </div>
                    </div>
                </div>
                </div>
            </article>
        </main>
    )
}
