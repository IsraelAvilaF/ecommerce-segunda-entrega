import axios from 'axios';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './DetalleProduct.css'

const URL ="https://67cb831e3395520e6af58918.mockapi.io/";

export default function DetalleProduct() {
    
    const { id } = useParams();
        const [product, setProduct] = useState({});

        useEffect(() => {
            async function getProductById() {
                try {
                    const response = await axios.get(`${URL}/products/${id}`);
                    setProduct(response.data);
                } catch (error) {
                    console.warn(error);
                }
            }
    
            if (id) getProductById();
        }, [id]);


    return (
        

        <main className="detalleProducto">
            <section className="product-detail">
                <div className="product-img">
                    <img 
                        alt={product.title}
                        src={product.image}
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
