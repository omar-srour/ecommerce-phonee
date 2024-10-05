import { useState } from "react";
import products from "../Data/Phone";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../Action";
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const dispatch = useDispatch(); // استخدام useDispatch
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseEvent = (cardIndex, isEntering) => {
    if (isEntering) {
      setActiveCard(cardIndex);
    } else {
      setActiveCard(null);
    }
  };

  const handleAddToCart = (product) => {
    console.log("Adding product:", product);
    dispatch(addProductToCart(product));
  };

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card">
              <img
                src={product.images}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <Link to={`/products/${product.id}`}>{product.title}</Link>
                <h5>${product.price}</h5>
                <p className="card-text">
                  {product.description}
                </p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)} 
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
