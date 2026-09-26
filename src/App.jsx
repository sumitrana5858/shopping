import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/success"
            element={<Success />}
          />
        </Routes>

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;