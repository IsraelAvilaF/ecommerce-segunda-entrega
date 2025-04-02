import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product({product, deleteProduct}) {
    return (
        <tr>

            <td className="name-cell">
                {product.title}
            </td>

            <td className="description-cell">
                {product.description}
            </td>

            <td className="price-cell">
                S/. {parseFloat(product.price).toFixed(2)}
            </td>

            <td className="category-cell">
                {product.category}
            </td>

            <td className="fechaIngreso-cell">
                {new Date(product.fechaIngreso).toLocaleDateString('es-PE')}
            </td>

            <td className="image-cell">
            {product.image instanceof File ? (
                <img 
                    src={URL.createObjectURL(product.image)} 
                    alt={product.title} 
                    width="50" 
                />
                ) : (
                    <span>
                        No image
                    </span>
                )}
            </td>

            <td className="tools-cell">
                <button className="btn">
                    <FontAwesomeIcon icon={faPencil}/>
                </button>
                <button className="btn button-xs btn-danger" onClick={() => deleteProduct(product.id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </td>
            
        </tr>
    )
}
