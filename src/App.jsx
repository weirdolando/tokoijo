import { useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Admin from "./components/Admin";

function App() {
  const [filter, setFilter] = useState("");
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div>
      <Navbar onFilter={handleFilter} />
      <Routes>
        <Route path="/" element={<Products filter={filter} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <footer className="text-sm text-center">Lindhu Kusuma 2023</footer>
    </div>
  );
}

export default App;
