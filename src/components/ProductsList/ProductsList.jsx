import Product from '../Product/Product';
import './ProductsList.css';

export default function ProductsList({products, deleteProduct, editProduct}) {

    return (
            <>
                {products.map((product) => (
                            <Product    key={product._id}
                                        product={product}
                                        deleteProduct={deleteProduct}
                                        editProduct={editProduct}
                            />
                        )
                    )
                }
            </>
        )
}