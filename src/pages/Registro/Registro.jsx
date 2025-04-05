import './Registro.css';
import React, { useEffect, useState } from 'react';
import UsersList from "../../components/UsersList/UsersList";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

const URL ="https://67cb831e3395520e6af58918.mockapi.io/";

export default function Registro() {

    const [users, setUsers] = useState([]);
    const [updateUsers, setUpdateUsers] = useState(null);
    const {register, handleSubmit, reset, setValue} = useForm();

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        if(updateUsers) {
            setValue("name", updateUsers.name);
            setValue("email", updateUsers.email);
            setValue("bday", updateUsers.bday);
            setValue("province", updateUsers.province);
        } else {
            reset();
        }
    
    }, [updateUsers, setValue, reset]);

    async function editUsers(user){
        setUpdateUsers(user);
    }

    async function getUsers(){
        try {
            const response = await axios.get(`${URL}/users`);
            setUsers(response.data);
        } catch (error) {
            console.error(error);
            alert("Ocurrió un error al obtener el usuario");
        }
    }

    async function addUsers(data){
        try{
            if(updateUsers){
                const id = updateUsers.id;

                const userToUpdate = {
                    name: data.name,
                    email: data.email,
                    bday: data.bday,
                    province: data.province,
                }

                const response = await axios.put(`${URL}/users/${id}`, userToUpdate);

                const userCopy = [...users];
                const index = userCopy.findIndex(user => user.id === id);
                userCopy[index] = response.data;

                setUsers(userCopy);
                setUpdateUsers(null);
                Swal.fire("Usuario actualizado", "El usuario se actualizó correctamente", "success");
            } else{
                let fechaISO = data.bdate;
                if (data.bdate.includes("/")) {
                    const fechaParts = data.bdate.split("/");
                    fechaISO = `${fechaParts[2]}-${fechaParts[1]}-${fechaParts[0]}`;
                }
                const newUser = {
                    id: users.length + 1,
                    name: data.name,
                    email: data.email,
                    province: data.province,
                    bdate: fechaISO,
                    profile: data.profile,
                };
                const response = await axios.post(`${URL}/users`, newUser);
                setUsers([...users, response.data]);
                reset();
                Swal.fire("Usuario creado", "El usuario se creó correctamente", "success");
            }
        }
        catch (error) {
            console.error(error);
            alert("Ocurrió un error al agregar el usuario");
        }
    }

    async function deleteUsers(id){
        try {
            Swal.fire({
                title: "¿Estás seguro de eliminar este usuario?",
                text: "No podrás recuperar este usuario después de eliminarlo.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Eliminar",
                cancelButtonText: "Cancelar",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axios.delete(`${URL}/users/${id}`);
                    getUsers();
                    Swal.fire("Usuario eliminado", "El usuario se eliminó correctamente", "success");
                }
            });
    } catch (error) {
        console.error(error);
        alert("Ocurrió un error al eliminar el usuario");
    }
    }

    return (
        <div className="register">
            <h1 className="register-title">
                REGISTRO
                <hr/>
            </h1>
            <form className="register-form" onSubmit={handleSubmit(addUsers)}>

                <div className="input-group">
                    <label htmlFor="Name">Nombre</label>
                    <input
                        {...register("name")}
                        autoFocus
                        id="Name"
                        maxLength="30"
                        minLength="7"
                        name="name"
                        placeholder="Israel Avila"
                        required
                        type="text"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        {...register("email")}
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
                        id="re-password"
                        maxLength="20"
                        minLength="6"
                        name="r-contraseña"
                        placeholder="********"
                        required
                        type="password"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="b-date">Fecha de Nacimiento</label>
                    <input 
                        {...register("fechaNacimiento")}
                        id="b-date" 
                        name="fecha-nacimiento" 
                        required 
                        type="date" 
                    />
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
                    <label htmlFor="profile-pic">Foto de Perfil</label>
                    <input
                        alt="Agrega foto de perfil"
                        id="profile-pic"
                        name="foto-perfil"
                        type="url"
                    />
                </div>

                <div className="btn">
                    <button type="submit">
                        {updateUsers ? "Actualizar Usuario" : "REGISTRAR"}
                    </button>
                </div>
            </form>
            <table border="1" className="admin-products">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Provincia</th>
                    <th>Foto de Perfil</th>
                    </tr>
                </thead>
                <tbody>
                        <UsersList   
                            users={users}
                            deleteUsers={deleteUsers}
                            editUsers={editUsers}
                        />
                </tbody>
            </table>
        </div>
    )
}
