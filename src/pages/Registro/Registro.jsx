import './Registro.css';
import React, { useEffect, useState } from 'react';
import UsersList from "../../components/UsersList/UsersList";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { URL } from '../../../config/env.config';

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
            setValue("bdate", updateUsers.bdate);
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
            const formData = new FormData();

            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('bdate', data.bdate);
            formData.append('province', data.province);
            formData.append('image', data.image[0]);
            formData.append('password', data.password);

            if(updateUsers){
                const id = updateUsers._id;

                const response = await axios.put(`${URL}/users/${id}`, formData);

                const userCopy = [...users];
                const index = userCopy.findIndex(user => user._id === id);
                userCopy[index] = response.data;

                setUsers(userCopy);
                setUpdateUsers(null);
                Swal.fire("Usuario actualizado", "El usuario se actualizó correctamente", "success");
            } else{
                let fecha = data.bdate;
                let fechaISO = fecha;
                if (fecha.includes("/")) {
                    const fechaParts = fecha.split("/");
                    fechaISO = `${fechaParts[2]}-${fechaParts[1]}-${fechaParts[0]}`;
                }
                const formData = new FormData();

                const newUser = {
                    _id: users._id,
                    name: formData.append('name', data.name),
                    email: formData.append('email', data.email),
                    password: formData.append('password', data.password),
                    image: formData.append('image', data.image[0]),
                    province: formData.append('province', data.province),
                    bdate: formData.append('bdate', fechaISO),
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

    async function deleteUsers(_id){
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
                    await axios.delete(`${URL}/users/${_id}`);
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
        <div className="tablas">
            <h1 className="table-title">
                REGISTRO
                <hr/>
            </h1>
            <div className='table'>
                <section className="product-form">
                    <form className="form" onSubmit={handleSubmit(addUsers)}>
                        <div className="input-group">
                            <label htmlFor="Name">Nombre</label>
                            <input
                                {...register("name")}
                                autoFocus
                                id="name"
                                maxLength="30"
                                minLength="7"
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
                                pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
                                placeholder="ejemplo@email.com"
                                required
                                type="email"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                            {...register("password")}
                                id="password"
                                maxLength="20"
                                minLength="4"
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
                                minLength="4"
                                placeholder="********"
                                required
                                type="password"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="b-date">Fecha de Nacimiento</label>
                            <input 
                                {...register("bdate")}
                                id="b-date"
                                type="date" 
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="province">Seleccione una provincia:</label>
                            <select id="province" required>
                                <option value="" disabled>--Seleccione--</option>
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
                                placeholder="Escribe aqui"
                                id="obs"
                                maxLength="300"
                                rows="5"
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="profile-pic">Foto de Perfil</label>
                            <input
                                {...register("image")}
                                id="profile-pic"
                                alt="Agrega foto del producto"
                                type="file"
                                accept="image/*"
                                required
                            />
                        </div>

                        <div className="btn">
                            <button type="submit">
                                {updateUsers ? "Actualizar Usuario" : "REGISTRAR"}
                            </button>
                        </div>
                    </form>
                </section>
            
                <table border="1" className="admin-products">
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Provincia</th>
                        <th>Foto de Perfil</th>
                        <th>Acciones</th>
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
        </div>
    )
}
