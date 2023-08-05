import './App.css';
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Nike Air Jordan 1",
    price: 19.99,
    image:
      "https://unfazed13.pt/cdn/shop/products/air-jordan-1-retro-high-university-blue-712341_5000x_0ec7e303-09b0-41ec-a9cd-35d036b3e7f7.png?v=1676394440",
    quantity: "14",
  },
  {
    id: 2,
    name: "Adidas Yeezy Boost 350",
    price: 550.0,
    image:
      "https://cdn.shopify.com/s/files/1/2358/2817/products/yeezy-boost-350-v2-static-non-reflective-540951.png?v=1638814846",
    quantity: "6",
  },
  {
    id: 2,
    name: "Adidas Ozweego low-top",
    price: 95,
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/1502d3d8116842df854eaec400f5d8ce_9366/OZWEEGO_Real_Madrid_Shoes_Black_HP7802.jpg",
    quantity: "0",
  },
  {
    id: 2,
    name: "Converse All Star",
    price: 175,
    image:
      "https://www.garagestore.az/storage/upload/product/20211203022861a91d3006800.jpeg",
    quantity: "29",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Product Cards</h1>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;