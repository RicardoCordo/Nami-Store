import { useState } from "react"

const ItemCount = ({stock = 40, initial = 1, onAdd}) => {
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

    const handleOnAdd = () =>{
      onAdd(count)
    }

  }
  return (
    <div className="card">
      <div className="card-header">
        <label htmlFor="">{count}</label>
      </div>
      <div className="card-body">
        <button onClick={sumar} className="btn btn-outline-primary">+</button>
        <button onClick={restar} className="btn btn-outline-primary">-</button>

      </div>
      <div className="footer">
        <button className="btn btn-outline-succsess btn-block" onClick={() => onAdd(count)}>Agregar producto al carrito</button>
      </div>
    </div>

  )
}

export default ItemCount
