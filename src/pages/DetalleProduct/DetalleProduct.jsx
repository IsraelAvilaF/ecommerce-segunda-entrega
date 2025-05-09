import axios from 'axios';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './DetalleProduct.css'
import { FILES_URL, URL } from '../../../config/env.config';


export default function DetalleProduct() {
    
    const { _id } = useParams();
    const [product, setProduct] = useState([]);

        useEffect(() => {
            async function getProductById() {
                try {
                    const response = await axios.get(`${URL}/products/${_id}`);
                    const productos = response.data.products;
                    setProduct(productos);

                } catch (error) {
                    console.warn(error);
                }
            }
    
            if (_id) getProductById();
        }, [_id]);


    return (
        


        <main className="detalleProducto">
            <section className="product-detail">
                <div className="product-img">
                    <img 
                        alt={product.title}
                        src={`${FILES_URL}/products/${product.image}`}
                    />
                </div>
                <div className="description-container">
                    <h1>{product.title}</h1>
                    <hr />
                    <p>S/.{product.price}</p>
                    <hr />
                    <span className="short-text">
                        {product.description}
                    </span>
                </div>
            </section>
            <section className="description">
                <hr />
                <h2>Descripción</h2>
                <hr />
                <div className="features">
                <ul>
                    <li>
                    {product.description}
                    </li>
                </ul>
                </div>
            </section>
        </main>
    )
}
