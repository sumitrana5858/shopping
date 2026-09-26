import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const order = {
      customer: form,
      products: cart,
      totalAmount: totalPrice,
      orderDate: new Date(),
    };

    console.log("ORDER:", order);

    // Backend API yahan call kar sakte ho
    // axios.post("/api/orders", order)

    clearCart();

    navigate("/success");
  };

  return (
    <div>
      <h1>Checkout</h1>

      <form onSubmit={handleOrder}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Full Address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          required
        />

        <h2>Total: ₹{totalPrice}</h2>

        <button type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;