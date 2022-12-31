import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFirestireApp } from './firestore/config'

initFirestireApp()

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
