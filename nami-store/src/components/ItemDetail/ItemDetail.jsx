
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ product }) => {

    const [isCount, setIsCount] = useState(false)

    const { addToCart } = useCartContext()

    const onAdd = (cant) => {
        addToCart({ ...product, cant })
        setIsCount(true)
    }


    return (

        <div className="DetailContainer">
            <div >
                <div  >

                    <div className='card'>
                        <img src={product.urlImage} alt='foto producto' className='w-30' />
                        <h3>Nombre: {product.name} </h3>
                        <h3>Categoria: {product.category} </h3>
                        <h4>Precio: {product.price} </h4>
                        <h4>Stock: {product.stock} </h4>
                    </div>

                    <div >
                        {isCount ?

                            <>
                                < Link className='btn btn-outline-primary' to='/' > Ir al home para seguir comprando</Link>
                                < Link className='btn btn-outline-primary' to='/cart' > Ir al carrito </Link>
                            </>

                            :

                            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
