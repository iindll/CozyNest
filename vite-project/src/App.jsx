import Navbar from "./components/NavBar/Navbar.jsx"
import HeroSection from "./components/HeroSection/HeroSection.jsx"
import TopCollection from "./components/Topcollection/TopCollection.jsx"
import Categories from "./components/Catagories/Categories.jsx"
const App = () => {
  return (
    <div className='conainer'>
     <Navbar/>
     <HeroSection/>
     <TopCollection/>

     <div className="container2">
    <Categories/>
     </div>
    </div>
  )
}

export default App