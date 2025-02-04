import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

function Cart() {
  // Fix: Correct useSelector usage
  const { items: cartItems,tempItems,totalPrice } = useSelector(state => state.cart);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className='cart-page-container'>
          <div className='cart-container'>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}> {/* Fix: Add key */}
                  <img src={cartItem.image} alt={cartItem.title} />
                  <div className="cart-item-details">
                    <h3>{cartItem.title}</h3> {/* Fix: Show actual title */}
                    <p>Price: ${cartItem.price}</p>
                    <div>
                      <input type="number" min="1" defaultValue={cartItem.quantity} />
                      <button>Update</button>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              ))
            )}
            <div className="cart-total">
              <p>Total: ${totalPrice}</p> {/* Fix: Show actual total */}
            </div>
            <button className='back-button'>Back to Shopping</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
