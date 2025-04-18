import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product({product, deleteProduct, editProduct}) {
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
                <img 
                    src={product.image}
                    alt={product.title} 
                    width="60" 
                />
            </td>

            <td className="tools-cell">
                <button 
                    className="btn button-xs" 
                    title="Editar" 
                    onClick={() => editProduct(product)}
                >
                    <FontAwesomeIcon icon={faPencil}/>
                </button>
                <button 
                    className="btn button-xs btn-danger" 
                    title="Eliminar"
                    onClick={() => deleteProduct(product.id)}
                >
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </td>
            
        </tr>
    )
}
