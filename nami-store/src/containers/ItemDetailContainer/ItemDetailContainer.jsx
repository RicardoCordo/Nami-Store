import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { gFetch } from "../../helpers/gFetch"


const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])

  const { productId } = useParams()
  useEffect(() => {
    gFetch()
      .then(respProd => setProduct(respProd.find(prod => prod.id === productId)))
      .catch(err => console.log(err))


  }, [])

  return (

    < div >
      <ItemDetail product={product} />
    </div >
  )
}

export default ItemDetailContainer