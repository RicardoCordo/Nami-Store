import { useState } from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'





function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Nami Store te saluda'} />

    </>

  )
}

export default App
