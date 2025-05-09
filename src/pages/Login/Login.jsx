import { useForm } from 'react-hook-form';
import './Login.css';
import { useUser } from '../../context/UserContext';

export default function Contacto() {

    const{
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const {login} = useUser();

    return (
        <main>
            <h1 className="login-title">
                LOGIN
                <hr />
            </h1>
            <div className="login-container">
                    <div className="login-form">
                        <form className="form" onSubmit={handleSubmit(login)}>
                            <div className="input-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                type="email"
                                {...register("correo-electronico", {
                                    required: 'Email es requerido',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Email no es válido'
                                    },
                                })}
                                placeholder="Ingresa tu correo electrónico"/>
                                {errors.email && <span className="input-error">{errors.email.message}</span>}
                            </div>
                            
                            <div className="input-group">
                                <label htmlFor="">Contraseña</label>
                                <input
                                    type="password"
                                    {...register("contraseña", {
                                        required: 'Contraseña es requerida',
                                        minLength: {
                                            value: 4,
                                            message: 'La contraseña debe tener al menos 4 caracteres'
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: 'La contraseña no puede tener más de 20 caracteres'
                                        },
                                    })}
                                    placeholder="Ingresa tu contraseña"/>
                                    {errors.password && <span className="input-error">{errors.password.message}</span>}
                            </div>
                            <div className="login-btn">
                            <button className="btn button--md" type="submit">
                                Ingresar
                            </button>
                            </div>
                        </form>
                    </div>
            </div>
        </main>
    )
}