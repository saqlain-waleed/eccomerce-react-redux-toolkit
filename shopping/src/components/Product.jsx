import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/shoppingcart/productSlice';
import { addToCart } from '../features/shoppingcart/cartSlice';

function Product() {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <p>Loading products...</p>;
  if (status === 'failed') return <p>Failed to load products...</p>;

  return (
    <>
      <Navbar />
      <div className="product-list">
        {products?.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} loading="lazy" />
            <h2>{product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
