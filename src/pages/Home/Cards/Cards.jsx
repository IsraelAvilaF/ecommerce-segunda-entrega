import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function cards(product, addProduct) {
    return (
        <>
            <div className="upper-card">
                <div className="product-status">
                    {product.status}
                </div>
                <div className="img">
                    <img
                        alt={product.title}
                        src={product.image}
                    />
                </div>
                <div className="plus-cart">
                    <button onClick={() => addProduct(product.id)}>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </button>
            </div>
            </div>
            <div className="bottom-card">
                <h3>{product.title}</h3>
                <div className="card-description">
                <p>
                    {product.description}
                </p>
                </div>
                <div className="price">
                    <p>
                        {product.price}
                    </p>
                </div>
                <a href="/pages/long-sleeve.html">Ver más</a>
            </div>
        </>
    )
}
