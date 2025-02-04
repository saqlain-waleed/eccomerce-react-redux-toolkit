import React from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Product from './components/Product'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App