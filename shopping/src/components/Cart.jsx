import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  removefromcart,
  updatequantitiy,
} from "../features/shoppingcart/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const { items: cartItems, totalPrice } = useSelector((state) => state.cart);
  useSelector((state) => console.log(state));
  const dispatch = useDispatch();

  const handleremoveitem = (id) => {
    dispatch(removefromcart(id));
  };

  const handleupdatequantitiy = (id, qty) => {
    console.log(id, qty);
    dispatch(updatequantitiy({ id, quantity: qty })); // Fix: Pass an object payload
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="cart-page-container">
          <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <img src={cartItem.image} alt={cartItem.title} />
                  <div className="cart-item-details">
                    <h3>{cartItem.title}</h3>
                    <p>Price: ${cartItem.price}</p>
                    <div>
                      <input
                        type="number"
                        min="1"
                        value={cartItem.quantity} // Fix: Reference cartItems directly
                        onChange={(e) =>
                          handleupdatequantitiy(
                            cartItem.id,
                            parseInt(e.target.value)
                          )
                        }
                      />
                      <button onClick={() => handleremoveitem(cartItem.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
            <div className="cart-total">
              <p>Total: ${totalPrice}</p>
            </div>
            <button className="back-button">
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Back to Shopping
              </Link>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
