import Navbar from "./components/NavBar/Navbar.jsx"
import HeroSection from "./components/HeroSection/HeroSection.jsx"
import TopCollection from "./components/Topcollection/TopCollection.jsx"
import Categories from "./components/Catagories/Categories.jsx"
import Byroom from "./components/Byroom/Byroom.jsx"
import Cart from "./components/Cart/Cart.jsx"
const App = () => {

  return (
    
    <div className='conainer'>
    <Navbar/>
     <Cart/>
     {/* <Navbar/>
     <HeroSection/>
     <TopCollection/> */}

     {/* <div className="container2">
    <Categories/>
     </div>
     <Byroom/> */}
    </div>
  )
}

export default App