import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { URL } from "../../config/env.config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {

    const navigate = useNavigate();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {

        user ? localStorage.setItem('user', JSON.stringify(user))
             : localStorage.removeItem('user');
        token ? localStorage.setItem('token', token)
              : localStorage.removeItem('token');
    }, [user, token]);

    async function login(data) {

        try {
            const response = await axios.post(`${URL}/login`, data);
            const { user, token } = response.data;
            setUser(user);
            setToken(token);
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido',
                text: `Hola ${user.name}, bienvenido de nuevo!`,
                timer: 2000,
                showConfirmButton: false,
            }).then(() => {
                navigate('/');
            });
        } catch (error) {
            console.error('Error durante el login:', error);
            Swal.fire({
                icon: 'error',
                title: 'Login fallido',
                text: error.response.data.message,
                timer: 2000,
                showConfirmButton: false,
            });
        }
    }

    function logout() {
        setUser(null);
        setToken(null);
    }


    return (
        <UserContext.Provider value={{
            login,
            user,
            token,
            logout,
            }}>
            {children}
        </UserContext.Provider>
    );
}