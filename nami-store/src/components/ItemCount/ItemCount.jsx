import { useState } from "react"

const ItemCount = ({ stock = 40, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial)

  const restar = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const handleOnAdd = () => {
    onAdd(count)
  }

  return (
    <div >
      <div>
        <label htmlFor="">{count}</label>
      </div>
      <div >
        <button onClick={sumar} className="btn btn-outline-primary">+</button>
        <button onClick={restar} className="btn btn-outline-primary">-</button>
      </div>
      <div >
        <button className="btn btn-outline-primary btn-block" onClick={handleOnAdd}>Agregar producto al carrito</button>
      </div>
    </div>

  )
}

export default ItemCount
