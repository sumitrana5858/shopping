import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h2>Your Cart is Empty</h2>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            width="100"
          />

          <h3>{item.title}</h3>

          <p>₹{item.price}</p>

          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity - 1)
            }
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity + 1)
            }
          >
            +
          </button>

          <button
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹{totalPrice}</h2>

      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;