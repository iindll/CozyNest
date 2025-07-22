import Navbar from "./components/NavBar/Navbar.jsx"
import HeroSection from "./components/HeroSection/HeroSection.jsx"
import TopCollection from "./components/Topcollection/TopCollection.jsx"
const App = () => {
  return (
    <div className='conainer'>
     <Navbar/>
     <HeroSection/>
     <TopCollection/>
    </div>
  )
}

export default App