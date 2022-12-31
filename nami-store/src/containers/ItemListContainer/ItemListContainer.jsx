import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../helpers/Loading/Loading'
import './ItemListContainer.css'


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { id } = useParams()


  useEffect(() => {

    const db = getFirestore()

    const queryCollection = collection(db, 'productos')

    const queryFiltrada = id ? query(queryCollection, where('category', '==', id,)) : queryCollection



    getDocs(queryFiltrada)
      .then(data => setProducts(data.docs.map(product => ({ id: product.id, ...product.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  }, [id])

  return (
    <div className='ItemContainer'>
      {loading ? <Loading />
        :
        <ItemList products={products} />
      }
    </div>
  )
}

export default ItemListContainer





