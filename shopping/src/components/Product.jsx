import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/shoppingcart/productSlice';

function Product() {
  // const { items, status } = useSelector((state) => state.products); 
  const { items:products, status } = useSelector((state) => state.products); // Fixed selector
  const dispatch = useDispatch(); // Fixed semicolon

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status]); // Added dispatch in dependencies

  if (status === 'loading') return <p>Loading products...</p>;
  if (status === 'failed') return <p>Failed to load products...</p>;

  return (
    <>
      <Navbar />
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}</h2>
            <p>Price: ${product.price}</p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
