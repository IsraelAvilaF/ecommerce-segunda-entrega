import {faMotorcycle, faRotate, faTruckFront } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './banner.css'
import './servicePanel.css'
import './Cards/Cards.css'
import './Home.css'
import Card from './Cards/Cards';
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const URL ="https://67cb831e3395520e6af58918.mockapi.io/";

export default function Home() {

    const [cards, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts(){
        try {
            const response = await axios.get(`${URL}/products`);
            setProducts(response.data);
        } catch (error) {
            console.error(error);
            alert("Ocurrió un error al obtener los productos");
        }
    }

    const {reset} = useForm();

    function addProduct(data){
        const file = data.image[0];
        let fechaISO = data.fechaIngreso;
        if (data.fechaIngreso.includes("/")) {
            const fechaParts = data.fechaIngreso.split("/");
            fechaISO = `${fechaParts[2]}-${fechaParts[1]}-${fechaParts[0]}`;
        }
        const newProduct = {
            id: cards.length + 1,
            title: data.title,
            description: data.description,
            price: data.price,
            category: data.category,
            fechaIngreso: fechaISO,
            image: file,
        };
        setProducts([...cards, newProduct]);
        reset();
    }

    return (
        
        <div>
            <section className="banner">
                <div className="slider">
                <input id="slide-1" name="slider" type="radio" />
                <input id="slide-2" name="slider" type="radio" />
                <input id="slide-3" name="slider" type="radio" />
                <div className="slider-buttons">
                    <label htmlFor="slide-1" />
                    <label htmlFor="slide-2" />
                    <label htmlFor="slide-3" />
                </div>
                <div className="slider-content">
                    <div className="slide slide-1">
                    <img alt="Slide 1 - Modelo Remera Blanca" src="/images/Slide1.jpg"/>
                    </div>
                    <div className="slide slide-2">
                    <img alt="Slide 2 - Modelo Gym Rat Negro" src="/images/Slide2.jpg" />
                    </div>
                    <div className="slide slide-3">
                    <img alt="Slide 3 - Modelo Outfit Gym" src="/images/Slide3.jpg" />
                    </div>
                </div>
                </div>
            </section>
            <>
                <div className="card">
                    <div className="single-box">
                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                id={card.id}
                                title={card.title}
                                price={`S/.${card.price}`}
                                description={card.description}
                                image={card.image}
                                category={card.category}
                                status={card.status}
                                addProduct={addProduct}
                            />))}
                    </div>
                </div>
            </>
            <section className="services-panel">
                <div className="panel-box">
                <div className="service">
                    <div className="icon">
                        <FontAwesomeIcon icon={faMotorcycle}/>
                    </div>
                    <p>
                    CABA: <br />
                    Entrega de 2 a 5 días hábiles con nuestro motorizado.
                    </p>
                </div>
                <div className="service">
                    <div className="icon">
                        <FontAwesomeIcon icon={faTruckFront}/>
                    </div>
                    <p>
                    PROVINCIA: <br />
                    Entrega de 3 a 7 días hábiles a través de UPS Courier.
                    </p>
                </div>
                <div className="service">
                    <div className="icon">
                        <FontAwesomeIcon icon={faRotate}/>
                    </div>
                    <p>
                    Si deseas realizar un cambio de talla, escríbenos a:
                    burnitactivewear@gmail.com dentro de los primeros 7 días de haber
                    recibido tu pedido.
                    </p>
                </div>
                </div>
            </section>
        </div>
    )
}
