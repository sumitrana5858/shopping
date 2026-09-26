import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav>
      <Link to="/">
        <h2>MyShop</h2>
      </Link>

      <Link to="/cart">
        🛒 Cart ({cart.length})
      </Link>
    </nav>
  );
};

export default Navbar;