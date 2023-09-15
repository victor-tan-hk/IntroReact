import './Cart.css';
import PropTypes from 'prop-types';

function Cart({ cart }) {
    return (
        <div className="cart-component">
        <h2>Your Cart</h2>
            <table>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Item</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.itemId}>
                    <td>{item.quantity}</td>
                    <td>{item.itemId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
  
    );
}

Cart.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
      itemId: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })).isRequired,
};

export default Cart;