import './Contacto.css';

export default function Contacto() {
    return (
        <main>
            <h1 className="contact-title">
                CONTACTANOS
                <hr />
            </h1>
            <div className="contacto">
                    <div className="contact-form">
                        <form className="form">
                            <div className="input-group">
                            <label htmlFor="name">Nombre Completo</label>
                            <input
                                id="name"
                                maxLength="30"
                                minLength="7"
                                name="Nombre"
                                placeholder="Israel Avila"
                                required
                                type="text"
                            />
                            </div>
                            <div className="input-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                id="email"
                                maxLength="30"
                                minLength="1"
                                name="correo-electronico"
                                pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
                                placeholder="ejemplo@email.com"
                                required
                                type="text"
                            />
                            </div>
                            <div className="input-group">
                            <label htmlFor="obs">Observaciones</label>
                            <textarea
                                defaultValue="Escribe aqui"
                                id="obs"
                                maxLength="300"
                                name="observaciones"
                                rows="10"
                            />
                            </div>
                            <div className="contact-btn">
                            <button className="btn" type="submit">
                                Enviar
                            </button>
                            </div>
                        </form>
                    </div>
                    <div className="maps">
                        <iframe
                            allowFullScreen
                            height="450"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.6116875433895!2d-58.442137123610635!3d-34.563385955370364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5b7e5fa2947%3A0x818ac39e5f54e294!2sMigueletes%201268%2C%20C1426BUR%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1730440344628!5m2!1ses-419!2sar"
                            style={{
                            border: "0",
                            }}
                            width="600"
                        />
                    </div>
            </div>
        </main>
    )
}
