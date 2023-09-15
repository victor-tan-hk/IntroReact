import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CoffeeLogo from '../images/logo.svg';
import CartIcon from '../images/cart.svg';
import './Header.css';

function Header({cart}) {
  
  console.log("Current value of cart is");
  console.log(cart);

  let cartQuantity = 0;
  for (let cartItem of cart) {
    cartQuantity += cartItem.quantity;
  }
  console.log ("Total of items in cart is ",cartQuantity);
  
  // Shortcut to sum up the quantity property of all objects in array
  // using the reduce higher order array method
  // Can use this to replace the conventional loop above
  
  //const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header-component">
      <Link to="/">
        <img src={CoffeeLogo} alt="coffee logo" />
        <h1>Code Café</h1>
      </Link>
      <div className="menu">
        <Link to="#todo">
          <img src={CartIcon} alt="Cart" />
          <div className="badge">{cartQuantity}</div>
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    itemId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
};

export default Header;
