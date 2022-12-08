
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {

    const onAdd = (cant) => {
        console.log('la cantidad seleccionada es',cant)
    }


    return (


        <div className="container border border-2">
            <div className="row">
                <div className='col'>

                    <div className="card w-100 mt-5" >
                        <img src={product.foto} alt='' className='w-50' />
                        <h3>nombre: {product.name} </h3>
                        <h3>categoria: {product.category} </h3>
                        <h3>Precio: {product.price} </h3>
                    </div>
                    <div className="col">
                        <ItemCount stock={40} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
