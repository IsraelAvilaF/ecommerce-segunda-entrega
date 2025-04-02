import Product from '../Product/Product';
import './ProductsList.css';

export default function ProductsList({products, deleteProduct}) {
    return (
            <>
                {products.map((product) => (
                            <Product    key={product.id}
                                        product={product}
                                        deleteProduct={deleteProduct}/>
                        )
                    )
                }
            </>
        )
}

{/* 
                        <tr>
                        <td className="image-cell">
                            <img
                            alt="Remera de deporte mangas cortas"
                            className="table-image"
                            src="/images/Product2.jpg"
                            />
                        </td>
                        <td className="name-cell">ACTIVE SHORT SLEEVE TOP</td>
                        <td className="description-cell">
                            ¡El top manga larga más lindo y cómodo que puedes combinar con todos tus outfits! Tejido y stretch. 100% cómodo.
                        </td>
                        <td className="price-cell">$ 50.000</td>
                        <td className="tools-cell">
                            <div className="icon-container">
                            <button className="btn">
                                <FontAwesomeIcon icon={faPencil}/>
                            </button>
                            <button className="btn btn-danger">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="image-cell">
                            <img
                            alt="BASIC CROP - Remera simple"
                            className="table-image"
                            src="/images/Product3.jpg"
                            />
                        </td>
                        <td className="name-cell">BASIC CROP</td>
                        <td className="description-cell">
                            ¡Tu t-shirt favorito! Gym fit favorito asegurado con este oversized t-shirt 100% cómodo y cool que no sabías que necesitabas. ¡Combínalo con tus básicos favoritos y crea para todos los días de la semana!
                        </td>
                        <td className="price-cell">$ 40.000</td>
                        <td className="tools-cell">
                            <div className="icon-container">
                            <button className="btn">
                                <FontAwesomeIcon icon={faPencil}/>
                            </button>
                            <button className="btn btn-danger">
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="image-cell">
                            <img
                            alt="COTTON SOCKS"
                            className="table-image"
                            src="/images/Product4.jpg"
                            />
                        </td>
                        <td className="name-cell">COTTON SOCKS</td>
                        <td className="description-cell">
                            Medias de algodón, ¡perfectas para cualquier tipo de actividad física!
                        </td>
                        <td className="price-cell">$ 20.000</td>
                        <td className="tools-cell">
                            <div className="icon-container">
                            <button className="btn">
                                <FontAwesomeIcon icon={faPencil}/>
                            </button>
                            <button className="btn btn-danger">
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="image-cell">
                            <img
                            alt="Conjunto de top de gym"
                            className="table-image"
                            src="/images/Product5.jpg"
                            />
                        </td>
                        <td className="name-cell">SOLID CROSS BACK TOP</td>
                        <td className="description-cell">
                            ¡El top perfecto si existe! Perfecto para deportes o actividades de alto impacto, siéntete segura con nuestro básico infaltable en tu closet. El top incluye copas  ¡úsalas o quítalas, como te sientas más cómoda! Pretina elasticada y un hermoso cruce de tiras en la espalda para mayor seguridad y comodidad para cualquier tipo de actividad física. ¡Combínalo con tus básicos favoritos y crea outfits para todos los días de la semana!
                        </td>
                        <td className="price-cell">$ 80.000</td>
                        <td className="tools-cell">
                            <div className="icon-container">
                            <button className="btn">
                                <FontAwesomeIcon icon={faPencil} />
                            </button>
                            <button className="btn btn-danger">
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="image-cell">
                            <img
                            alt="Short de deporte"
                            className="table-image"
                            src="/images/Product6.jpg"
                            />
                        </td>
                        <td className="name-cell">SHORT SCRUNCH</td>
                        <td className="description-cell">
                            ¡Los favoritos! Shorts sin costuras, pretina alta y marcas en el contorno de glúteos que te dan el realce preciso para lucir un booty pump perfecto! Te ayudamos con la talle.. Si usas talla 26/27/28 de pantalón eres S y si usas 30/32 de pantalón eres M </td>
                        <td className="price-cell">$ 40.000</td>
                        <td className="tools-cell">
                            <div className="icon-container">
                            <button className="btn">
                                <FontAwesomeIcon icon={faPencil} />
                            </button>
                            <button className="btn btn-danger">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="image-cell">
                            <img
                            alt="Remera basica roja"
                            className="table-image"
                            src="/images/Product7.jpg"
                            />
                        </td>
                        <td className="name-cell">LIFT LIKE A GIRL T-SHIRT</td>
                        <td className="description-cell">
                            ¡Tu pump cover favorito! Remeras 100% algodón con fit oversize y estampado en el delantero. Disponible en 4 colores. Diseñado por BURN IT y confeccionado en Perú para ti. Gym fit favorito asegurado con este oversized t-shirt 100% cómodo y cool que no sabías que necesitabas. ¡Combínalo con tus básicos favoritos y crea outfits para todos los días de la semana!
                        </td>
                        <td className="price-cell">$ 25.000</td>
                        <td className="tools-cell">
                            <div className="icon-container">
                            <button className="btn">
                                <FontAwesomeIcon icon={faPencil}/>
                            </button>
                            <button className="btn btn-danger">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            </div>
                        </td>
                        </tr>
                        <tr>
                        <td className="image-cell">
                            <img
                            alt="Short azul"
                            className="table-image"
                            src="/images/Product8.jpg"
                            />
                        </td>
                        <td className="name-cell">BIKER SHORTS</td>
                        <td className="description-cell">
                            ¡Los infaltables! Confeccionados con textiles respirables y tecnología Sport Sec que permite la absorción y expulsión de la humedad gracias a las propiedades de sus fibras y tratamiento hidrófobo. Hablemos de los detalles.. Pretina ancha con cintura elasticada para un ajuste preciso y corte corazón para el realce perfecto. Las costuras planas y el suplex de alto gramaje para evitar que trasluzca te darán la comodidad y seguridad que necesitas. ¡Combínalo con tus básicos favoritos y crea outfits para todos los días de la semana!
                        </td>
                        <td className="price-cell">$ 40.000</td>
                        <td className="tools-cell">
                            <div className="icon-container">
                            <button className="btn">
                                <FontAwesomeIcon icon={faPencil}/>
                            </button>
                            <button className="btn btn-danger">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            </div>
                        </td>
                        </tr> */}