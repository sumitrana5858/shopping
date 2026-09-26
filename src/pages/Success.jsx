import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div>
      <h1>🎉 Order Placed Successfully!</h1>

      <p>
        Thank you for shopping with us.
      </p>

      <Link to="/">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Success;