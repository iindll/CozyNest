import { useState , useEffect} from "react"
import "./HeroSection.css"
import image1 from "../../assets/HeroSection1.jpeg"
import image2 from "../../assets/HeroSection2.jpeg"
import image3 from "../../assets/Herosection3.jpeg"
import serachBar from "../../assets/Search.svg"
const HeroSection = () => {
      const backgroundImages = [image1, image2, image3];



    const [Background ,setBackground] = useState(0)
     useEffect(() => {
    const interval = setInterval(() => {
      setBackground((prev) => (prev+1) % backgroundImages.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='HeroSection' style={{
        backgroundImage:`url(${backgroundImages[Background]})`,
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out"
    }}>

        <div className="innerContainer">
        <div className="text-section">
        <h1>Welcome to Cozy<span>N</span>est</h1>
        <p>where comfort meets modern design</p>
        </div>
        <div className="Search">
            <div className="searchbar">
        <img src={serachBar} alt="" />
        <input type="text" placeholder=""/></div>
        <button>Search</button>    
        </div>
        </div>
        </div>
    
  )
}

export default HeroSection