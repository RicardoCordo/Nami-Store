import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCartContext } from '../../context/CartContext'
import './CartWidget.css'
export const CartWidget = () => {

  const { totalQuantity } = useCartContext()

  return (

    <div className="carrito">
      {totalQuantity() !== 0 && totalQuantity()}
      <AiOutlineShoppingCart />
    </div>
  )

}

export default CartWidget

