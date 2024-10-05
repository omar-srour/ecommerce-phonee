import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart.cart); 
  const cartLength = cart.length; 
  

  return (
    <nav className='navbar'>
      <NavLink className="navbar-brand" to="/">Ecommerce phone</NavLink>
      <div className="shopcart">
      <NavLink className="nav-link" to={"/CartItem"}>
          <img src="/cart.svg" alt="" className="cart"  />
          <p>Cart({cartLength})</p> {/* عرض عدد العناصر في السلة */}
          </NavLink>
      </div>
    </nav>
  );
};

export default Header;
