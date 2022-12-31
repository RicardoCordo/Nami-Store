import { Link } from "react-router-dom"
import './Item.css'
const Item = ({ product }) => {
    return (
        <div
            style={{ marginLeft: 120}}
            className='col-md-4 cards'
        >
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${product.name}`}
                </div>
                <div className="photo">
                    <img src={product.urlImage} alt='foto productos' className='w-75' />
                    <h4 className="productPrice">${product.price}</h4>
                </div>

                <div >
                    <Link to={`/detail/${product.id}`}>
                        <button className="itemButton">
                            detalle del producto
                        </button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Item
