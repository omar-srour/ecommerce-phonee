import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { incrementCartQuantity, decrementCartQuantity, removeProductToCart } from '../Action/index';

const CartItem = ({ cartItems, dispatch }) => {

  const handleIncrementOrDecrement = (id, type, currentQuantity) => {
    if (type === 'inc' && currentQuantity < 10) {
      dispatch(incrementCartQuantity(id));
    }

    if (type === 'desc' && currentQuantity > 1) {
      dispatch(decrementCartQuantity(id));
    }
  };

  const removeItem = (id) => {
    dispatch(removeProductToCart(id));
  };

 
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity; 
    }, 0); 
  };

  return (
    <div className="Shipping">
      <div className="card-header" style={{ backgroundColor: '#333' }}>
        <h3>Shopping Cart</h3>
      </div>

      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="palse" key={item.id}>
              <div className="cardtext">
              <img src={item.images} alt={item.title} width="100" />

                <div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="salary">
                <h3>${item.price}</h3>
                <div className="quantity">
                  <input
                    type="number"
                    step="1"
                    max="10"
                    min="1"
                    className="qty"
                    size="4"
                    value={item.quantity}
                    readOnly
                  />
                  <input
                    type="button"
                    value="+"
                    className="plus"
                    onClick={() => handleIncrementOrDecrement(item.id, 'inc', item.quantity)}
                  />
                  <input
                    type="button"
                    value="-"
                    className="minus"
                    onClick={() => handleIncrementOrDecrement(item.id, 'desc', item.quantity)}
                  />
                </div>
                <button className="btn btn-outline-danger btn-xs" onClick={() => removeItem(item.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}

         
          <div className='totalprice'>
            <h5>Total Price: ${calculateTotalPrice().toFixed(2)}</h5> 
          </div>
        </>
      )}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cart 
  };
};

export default connect(mapStateToProps)(CartItem);
