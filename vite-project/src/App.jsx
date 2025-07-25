import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import TopCollection from "./components/Topcollection/TopCollection.jsx";
import Categories from "./components/Catagories/Categories.jsx";
import Byroom from "./components/Byroom/Byroom.jsx";
import Cart_comp from "./components/Cart/Cart.jsx";
import Login_comp from "./components/Authentication/Login.jsx"
import Signup_comp from "./components/Authentication/SignUp.jsx"

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

const Login = () =>{
  return(
    <div className="Login-container">
<Login_comp/>
    </div>
  )
}

const Signup = () =>{
  return(
    <div className="Cart-container">
      <Navbar/>
      <Signup-comp />
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />


      </Routes>
    </Router>
  );
};

export default App;
