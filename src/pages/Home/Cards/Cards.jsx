import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useOrder } from '../../../context/OrderContext'

export default function Cards({ title, price, description, image, status, id}) {

    const {addProduct} = useOrder();
    const detailProduct = () => {
        window.location.href = `/DetalleProduct/${id}`;
    };

    return (
        
            <article className="card">
                <div className="single-box">
                    <div className="upper-card">
                        <div className="product-status">
                            {status}
                        </div>
                        <div className="img">
                            <img
                                alt={title}
                                src={image}
                            />
                        </div>
                        <div className="plus-cart">
                            <button
                                
                                onClick={() => addProduct (product => product.id === id ? {...product, quantity: product.quantity + 1} : product)}
                                >
                                <FontAwesomeIcon className='cart-icon' icon={faCartPlus} />
                            </button>
                    </div>
                    </div>
                    <div className="bottom-card">
                        <h3>{title}</h3>
                        <div className="card-description">
                        <p>
                            {description}
                        </p>
                        </div>
                        <div className="price">
                            <p>
                                {price}
                            </p>
                        </div>
                        <a 
                            className='link' 
                            href="#" 
                            onClick={detailProduct}
                        >
                            Ver más
                        </a>
                    </div>
                </div>
            </article>
        
    )
}
