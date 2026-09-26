import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        width="200"
      />

      <h2>{product.title}</h2>

      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <button onClick={handleBuyNow}>
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;