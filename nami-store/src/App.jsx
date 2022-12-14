
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'
import './App.css'
import { CartContextProvider } from './context/CartContext'

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar componente={ItemListContainer} />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>

  )
}

export default App
