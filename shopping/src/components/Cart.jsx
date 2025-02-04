import React from 'react'
import Navbar from './Navbar'

function Cart() {
  return (
    <>
    <Navbar/>
    <div className="wrapper">
    <div className='cart-page-container'>
      <div className='cart-container'>
        <h2>Your Cart</h2>
        <div className="cart-item">
          <img src="Image path" alt="Image title" />
          <div className="cart-item-details">
            <h3>Image Title</h3>
            <p>Price: 200</p>
            <div>
              <input type="number" min="1" />
              <button>Update</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="cart-total">
        <p>Total: 200</p>
        </div>
        <button className='back-button'>Back to Shopping</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Cart