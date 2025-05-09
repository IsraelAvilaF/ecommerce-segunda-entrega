import './AdminProduct.css';
import React, { useEffect, useState } from 'react';
import ProductsList from "../../components/ProductsList/ProductsList";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { URL } from '../../../config/env.config';

export default function AdminProduct() {
    const [products, setProducts] = useState([]);
    const [updateProduct, setUpdateProduct] = useState(null);
    const {register, handleSubmit, reset, setValue} = useForm();

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if(updateProduct) {
            setValue("title", updateProduct.title);
            setValue("description", updateProduct.description);
            setValue("price", updateProduct.price);
            setValue("category", updateProduct.category);
        } else {
            reset();
        }

    }, [updateProduct, setValue, reset]);

    async function editProduct(product){
        setUpdateProduct(product);
    }

    async function getProducts(){
        try {
            const response = await axios.get(`${URL}/products`);
            setProducts(response.data);
        } catch (error) {
            console.error(error);
            alert("Ocurrió un error al obtener los productos");
        }
    }

    async function addProduct(data){
        try{

            const formData = new FormData();
            
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('price', data.price);
            formData.append('category', data.category);
            formData.append("image", data.image[0]);
            formData.append('fechaIngreso', data.fechaIngreso);

            if(updateProduct){
                const _id = updateProduct._id;

                // const productToUpdate = {
                //     title: data.title,
                //     description: data.description,
                //     price: data.price,
                //     category: data.category,
                // }

                // const formData = new FormData();
            
                // formData.append('title', data.title);
                // formData.append('description', data.description);
                // formData.append('price', data.price);
                // formData.append('category', data.category);
                // formData.append("image", data.image[0]);
                // formData.append('fechaIngreso', data.fechaIngreso);

                const response = await axios.put(`${URL}/products/${_id}`, FormData);

                const productCopy = [...products];
                const index = productCopy.findIndex(product => product._id === _id);
                productCopy[index] = response.data;

                setProducts(productCopy);
                setUpdateProduct(null);
                Swal.fire("Producto actualizado", "El producto se actualizó correctamente", "success");

            } else{
            let fechaISO = formData.append('fechaIngreso', data.fechaIngreso);
            if (formData.append('fechaIngreso', data.fechaIngreso).includes("/")) {
                const fechaParts = formData.append('fechaIngreso', data.fechaIngreso).split("/");
                fechaISO = `${fechaParts[2]}-${fechaParts[1]}-${fechaParts[0]}`;
            }
            const newProduct = {
                _id: products.length + 1,
                title: formData.append('title', data.title),
                description: formData.append('description', data.description),
                price: formData.append('price', data.price),
                category: formData.append('category', data.category),
                fechaIngreso: fechaISO,
                image: formData.append("image", data.image[0]),
            };
            const response = await axios.post(`${URL}/products`, newProduct);
            setProducts([...products, response.data]);
            reset();
            Swal.fire("Producto creado", "El producto se creó correctamente", "success");
        }

        }

        catch (error) {
            console.error(error);
            alert("Ocurrió un error al agregar el producto");
        }
    }

    async function deleteProduct(_id){
        try {
                Swal.fire({
                    title: "¿Estás seguro de eliminar este producto?",
                    text: "No podrás recuperar este producto después de eliminarlo.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar",
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await axios.delete(`${URL}/products/${_id}`);
                        getProducts();
                        Swal.fire("Producto eliminado", "El producto se eliminó correctamente", "success");
                    }
                });
        } catch (error) {
            console.error(error);
            alert("Ocurrió un error al eliminar el producto");
        }
    }

    return (

        <main className="tablas">
            <h1 className="table-title">
                ADMINISTRADOR DE PRODUCTOS
                <hr />
            </h1>

            <div className="table">
                <section className="product-form">
                    <form className="form" onSubmit={handleSubmit(addProduct)}>
                        <div className="input-group">
                            <label htmlFor="product">Producto</label>
                            <input
                                {...register("title")}
                                id="product"
                                maxLength="30"
                                minLength="7"
                                placeholder="Long Sleeves"
                                type="text"
                                required
                            />
                        </div>

                        <div className="input-group">
                        <label htmlFor="price">Precio</label>
                        <input
                            {...register("price")}
                            id="price"
                            maxLength="30"
                            minLength="1"
                            placeholder="S/.70"
                            type="number"
                            required
                        />
                        </div>

                        <div className="input-group">
                            <label htmlFor="category">Categoría</label>
                            <select
                                {...register("category", { required: true })}
                                id="category"
                                defaultValue=""
                            >
                                <option value="" disabled>Seleccionar categoría</option>
                                <option value="Ropa Deportiva">Ropa Deportiva</option>
                                <option value="Accesorios Deportivos">Accesorios Deportivos</option>
                                <option value="Shorts Deportivos">Shorts Deportivos</option>
                                <option value="Remeras Deportivas">Remeras Deportivas</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label htmlFor="fechaIngreso">Fecha de Ingreso</label>
                            <input
                                {...register("fechaIngreso")}
                                id="fechaIngreso"
                                placeholder="26/09/2021"
                                type="date"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="description">Descripción</label>
                            <textarea
                                {...register("description")}
                                id="description"
                                placeholder="Ingresa una descripción"
                                maxLength="300"
                                rows={5}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="product-pic">Imagen</label>
                            <input
                                {...register("image")}
                                id="product-pic"
                                alt="Agrega foto del producto"
                                type="file"
                                accept="image/*"
                                required
                            />
                        </div>

                        <div className="btn-contenedor">
                            <button type="submit">
                                {updateProduct ? "Actualizar Producto" : "CREAR"}
                            </button>
                        </div>
                    </form>
                </section>
                <table border="1" className="admin-products">
                    <thead>
                        <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Fecha de Ingreso</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                            <ProductsList   
                                products={products}
                                deleteProduct={deleteProduct}
                                editProduct={editProduct}
                            />
                    </tbody>
                </table>
            </div>
        </main>
    )
}
