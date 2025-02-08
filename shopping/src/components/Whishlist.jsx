import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import React from "react";
import { Link } from "react-router-dom";
import { remFromFav } from '../features/shoppingcart/whislistSlice';


function Wishlist() {
  const { items: whishitems } = useSelector((state) => state.wishitems); // Make sure state key matches store.js
  const dispatch = useDispatch();


    const handleremovewishitems = (id) => {
      dispatch(remFromFav(id));
    };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="cart-page-container">
          <div className="cart-container">
            <h2>Your Wishlist</h2>
            {whishitems.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              whishitems.map((product) => (
                <div className="cart-item" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <div className="cart-item-details">
                    <h3>{product.title}</h3>
                    <div>
                      <button onClick={() => handleremovewishitems(product.id)}>Remove from Wishlist</button>
                    </div>
                  </div>
                </div>
              ))
            )}
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

export default Wishlist;
