import { Routes, Route } from "react-router-dom";
import Product from "./components/Fetch API/Product";
import ProductDetail from "./components/Fetch API/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}  

export default App;
