import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"


const Form = () => {
  const [dataForm, setFormData] = useState({
    name: '',
    email: '',
    ComfEmail: '',
    phone: ''
  })

  const { cartList, clearCart, totalPrice } = useCartContext()

  const addOrder = (e) => {
    e.preventDefault()

    const order = {}
    order.buyer = dataForm
    order.price = totalPrice()
    order.items = cartList.map(({ id, price, name }) => ({ id, price, name }))

    const db = getFirestore()
    const queryCollection = collection(db, 'orders')


    addDoc(queryCollection, order)

      .then(resp =>
        Swal.fire({
          title: "Compra realizada",
          text: ` Gracias por comprar en Nami Store, el id de tu compra es: ${resp.id}`
        }))
      .catch(err => console.log(err))
      .finally(() => clearCart())


  }
  const handleOnChange = (e) => {
    setFormData({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <form onSubmit={addOrder} >
        <input
          type="text"
          onChange={handleOnChange}
          name='name'
          value={dataForm.name}
          placeholder="ingrese el nombre"
        />
        <input
          type="text"
          onChange={handleOnChange}
          name='phone'
          value={dataForm.phone}
          placeholder="ingrese el telefono"
        />
        <input
          type="text"
          onChange={handleOnChange}
          name='email'
          value={dataForm.email}
          placeholder="ingrese el email"
        />
        <input
          type="text"
          onChange={handleOnChange}
          name='ComfEmail'
          value={dataForm.ComfEmail}
          placeholder="ingrese comfirmacion de email"
        />
        {
          dataForm.name == "" ||
            dataForm.phone == "" ||
            dataForm.email == "" ||
            dataForm.ComfEmail == "" ||
            dataForm.email !== dataForm.ComfEmail
            ?
            <input type="submit" value="Porfavor complete todos los campos para continuar" className='btn btn-danger' disabled />
            :
            <input type="button" value="Comprar" className="btn btn-primary" onClick={addOrder} />

        }

      </form>
    </>
  )
}

export default Form
