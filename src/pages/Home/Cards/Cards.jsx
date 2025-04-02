import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function cards({ id, title, price, description, image, status, addProduct }) {
    return (
        <>
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
                    <button onClick={() => addProduct(id)}>
                        <FontAwesomeIcon icon={faCartPlus} />
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
                <a href="/pages/long-sleeve.html">Ver más</a>
            </div>
        </>
    )
}
