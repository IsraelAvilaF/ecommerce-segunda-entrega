import axios from 'axios';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './DetalleProduct.css'

const URL ="https://67cb831e3395520e6af58918.mockapi.io/";

export default function DetalleProduct() {
    
    const { id } = useParams();
        const [detail, setDetail] = useState({});

        useEffect(() => {
            async function getDetailById() {
                try {
                    const response = await axios.get(`${URL}/Productos/${id}`);
                    setDetail(response.data);
                } catch (error) {
                    console.warn(error);
                }
            }
    
            if (id) getDetailById();
        }, [id]);


    return (
        

        <main className="detalleProducto">
            <section className="product-detail">
                <div className="product-img">
                    <img 
                        alt={detail.title}
                        src={detail.image}
                    />
                </div>
                <div className="description-container">
                    <h1>{detail.title}</h1>
                    <hr />
                    <p>{detail.price}</p>
                    <hr />
                    <span className="short-text">
                        {detail.description}
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
                    {detail.description}
                    </li>
                </ul>
                </div>
            </section>
        </main>
    )
}
