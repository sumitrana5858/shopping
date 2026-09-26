import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    title: "iPhone 15",
    price: 59999,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
  },
  {
    id: 2,
    title: "MacBook Air",
    price: 89999,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
  },
  {
    id: 3,
    title: "AirPods Pro",
    price: 24999,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
  },
];

const Home = () => {
  return (
    <div>
      <h1>Shopping Store</h1>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;