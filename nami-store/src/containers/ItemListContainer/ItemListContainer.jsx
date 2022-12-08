import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import { gFetch } from '../../helpers/gFetch'
import './ItemListContainer.css'


const ItemListContainer = () => {

  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()


  useEffect(() => {

    if (id) {
      gFetch()
        .then(data => setProduct(data.filter(prod => prod.category === id)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
  } else {

    gFetch()
    .then(data => setProduct(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }
  }  , [id])

  return (
    <div >
      {loading ? <h2>cargando pagina...</h2>
        :
        <ItemList products={products}/>
      }
    </div>
  )
}

export default ItemListContainer





