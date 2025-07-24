import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import TopCollection from "./components/Topcollection/TopCollection.jsx";
import Categories from "./components/Catagories/Categories.jsx";
import Byroom from "./components/Byroom/Byroom.jsx";
import Cart from "./components/Cart/Cart.jsx";

// مكون للصفحة الرئيسية
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   {/* الصفحة الرئيسية */}
        <Route path="/cart" element={<Cart />} /> {/* صفحة السلة */}
      </Routes>
    </Router>
  );
};

export default App;
