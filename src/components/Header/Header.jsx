import { faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";
import "./Header.css"

export default function Header() {
    return (
        <header className="main-header">
            <input className="input-burger" id="burger" type="checkbox" />
            <label className="burger-container" htmlFor="burger">
            <img
                alt="Menú Logo Burnit"
                className="burger"
                src="images/LOGO-BURN-IT-2024-redondo.png"
            />
            </label>
            <nav className="main-nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={"/"}>
                            PRINCIPAL
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Registro">
                            REGISTRO
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Contacto">
                            CONTACTO
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/AcercaDe">
                            NOSOTROS
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/AdminProduct">
                            ADMIN PRODUCTS
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="main-title">
                <h1 className="title">
                    <img
                    alt="Texto 'Burn-it' con el logo"
                    src="/images/LOGO-BURN-IT-2024-blanco.png"
                    />
                </h1>
            </div>
            <div className="user-info">
                <div className="profile-container">
                    <FontAwesomeIcon icon={faUser}/>
                </div>
                <div className="cart-container">
                    <FontAwesomeIcon icon={faShoppingBag}/>
                </div>
            </div>
            
        </header>
    )
}
