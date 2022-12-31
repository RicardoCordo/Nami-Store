import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import Form from "../Form/Form"
import './CartList.css'

const CartList = () => {
    const { cartList, clearCart, clearItem, totalPrice } = useCartContext()
    return (
        <div className="cartContainerGeneral">
            {cartList.length !== 0 ?
                <>

                    {cartList.map(product => <div key={product.id}>
                        <div className="w-50">
                            <img src={product.urlImage} alt="" className="w-25" />
                        </div>
                        <div className="descriptionProducts">
                            Nombre:{product.name}
                            - Categoria: {product.category}
                            - Precio: {product.price}
                            - Cantidad {product.cant}
                            <button onClick={() => clearItem(product.id)} className="boton"> X </button>
                        </div>
                    </div>

                    )

                    }
                    <h4 className="totalPrice">El precio total es de: {totalPrice()} </h4>

                    <Form />

                    <button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>

                </>
                :
                <>
                    <h2>Su carrito esta vacio</h2>
                    < Link className='btn btn-outline-primary' to='/' > Ir al home para comprar </Link>
                </>
            }
        </div >
    )
}




export default CartList
