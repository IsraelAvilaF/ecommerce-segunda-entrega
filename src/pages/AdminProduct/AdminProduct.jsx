import './AdminProduct.css';
import React, { useEffect, useState } from 'react';
import ProductsList from "../../components/ProductsList/ProductsList";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const URL ="https://67cb831e3395520e6af58918.mockapi.io/";

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
            if(updateProduct){
                const id = updateProduct.id;

                const productToUpdate = {
                    title: data.title,
                    description: data.description,
                    price: data.price,
                    category: data.category,
                }

                const response = await axios.put(`${URL}/products/${id}`, productToUpdate);

                const productCopy = [...products];
                const index = productCopy.findIndex(product => product.id === id);
                productCopy[index] = response.data;

                setProducts(productCopy);
                setUpdateProduct(null);

                // getProducts();

            } else{
                let fechaISO = data.fechaIngreso;
                if (data.fechaIngreso.includes("/")) {
                    const fechaParts = data.fechaIngreso.split("/");
                    fechaISO = `${fechaParts[2]}-${fechaParts[1]}-${fechaParts[0]}`;
                }
                const newProduct = {
                    id: products.length + 1,
                    title: data.title,
                    description: data.description,
                    price: data.price,
                    category: data.category,
                    fechaIngreso: fechaISO,
                    image: data.image,
                };
                const response = await axios.post(`${URL}/products`, newProduct);
                setProducts([...products, response.data]);
                reset();
            }
        }
        catch (error) {
            console.error(error);
            alert("Ocurrió un error al agregar el producto");
        }
    }

    async function deleteProduct(id){
        try {
            const confirmDelete = window.confirm("¿Estás seguro de eliminar este producto?");
            if (confirmDelete){
                await axios.delete(`${URL}/products/${id}`);
                getProducts();
            };
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
                        <label htmlFor="category">Categoria</label>
                        <textarea
                            {...register("category")}
                            id="category"
                            maxLength="30"
                            placeholder="Conjunto Deportivo"
                            type="text"
                            required
                        />
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
                                required
                            />
                        </div>

                        <div className="btn">
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
                        <th>Fecha de Ingreso</th>
                        <th>Categoría</th>
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
