import React from 'react'
import Cart from './components/Cart'
import Product from './components/Product'
import Whishlist from './components/whishlist'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/whishlist" element={<Whishlist/>}/>

      </Routes>
    </Router>
  )
}

export default App