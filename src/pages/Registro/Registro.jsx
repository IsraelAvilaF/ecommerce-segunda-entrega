import './Registro.css';

export default function Registro({nombre, email, fechaNacimiento, fotoPerfil}) {
    return (
        <div className="register">
            <h1 className="register-title">
                REGISTRO
                <hr/>
            </h1>
            <form className="register-form">
                <div className="input-group">
                <label htmlFor="Name">{nombre}</label>
                <input
                    autoFocus
                    id="Name"
                    maxLength="30"
                    minLength="7"
                    name="nombre"
                    placeholder="Israel Avila"
                    required
                    type="text"
                />
                </div>
                <div className="input-group">
                <label htmlFor="email">{email}</label>
                <input
                    id="email"
                    maxLength="30"
                    minLength="1"
                    name="correo-electronico"
                    pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
                    placeholder="ejemplo@email.com"
                    required
                    type="email"
                />
                </div>
                <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input
                    id="password"
                    maxLength="20"
                    minLength="6"
                    name="contraseña"
                    placeholder="********"
                    required
                    type="password"
                />
                </div>
                <div className="input-group">
                <label htmlFor="password">Repetir contraseña</label>
                <input
                    id="password"
                    maxLength="20"
                    minLength="6"
                    name="r-contraseña"
                    placeholder="********"
                    required
                    type="password"
                />
                </div>
                <div className="input-group">
                <label htmlFor="b-date">{fechaNacimiento}</label>
                <input id="b-date" name="fecha-nacimiento" required type="date" />
                </div>
                <div className="input-group">
                <label htmlFor="province">Seleccione una provincia:</label>
                <select id="province" name="provincia" required>
                    <option value="">--Seleccione--</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="CABA">CABA</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Chaco">Chaco</option>
                    <option value="Chubut">Chubut</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Corrientes">Corrientes</option>
                    <option value="Entre Ríos">Entre Ríos</option>
                    <option value="Formosa">Formosa</option>
                    <option value="Jujuy">Jujuy</option>
                    <option value="La Pampa">La Pampa</option>
                    <option value="La Rioja">La Rioja</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Misiones">Misiones</option>
                    <option value="Neuquén">Neuquén</option>
                    <option value="Río Negro">Río Negro</option>
                    <option value="Salta">Salta</option>
                    <option value="San Juan">San Juan</option>
                    <option value="San Luis">San Luis</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Santa Fe">Santa Fe</option>
                    <option value="Santiago del Estero">Santiago del Estero</option>
                    <option value="Tierra del Fuego">Tierra del Fuego</option>
                    <option value="Tucumán">Tucumán</option>
                </select>
                </div>
                <div className="input-group">
                <label htmlFor="obs">Observaciones</label>
                <textarea
                    defaultValue="Escribe aqui"
                    id="obs"
                    maxLength="300"
                    name="observaciones"
                    rows="5"
                />
                </div>
                <div className="input-group">
                <label htmlFor="profile-pic">{fotoPerfil}</label>
                <input
                    alt="Agrega foto de perfil"
                    id="profile-pic"
                    name="foto-perfil"
                    type="file"
                />
                </div>
                <div className="register-btn">
                <button className="btn" type="submit">
                    Registrarse
                </button>
                </div>
            </form>
        </div>
    )
}
