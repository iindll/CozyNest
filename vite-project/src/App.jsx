import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import TopCollection from "./components/Topcollection/TopCollection.jsx";
import Categories from "./components/Catagories/Categories.jsx";
import Byroom from "./components/Byroom/Byroom.jsx";
import Cart_comp from "./components/Cart/Cart.jsx";

const Home = () => {
  return (
    <div className="conainer">
      <Navbar />
      <HeroSection />
      <TopCollection />
      <div className="container2">
        <Categories />
      </div>
      <Byroom />
    </div>
  );
};

const Cart = () => {
  return (
    <div className="Cart-container">
      <Navbar/>
      <Cart_comp />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
