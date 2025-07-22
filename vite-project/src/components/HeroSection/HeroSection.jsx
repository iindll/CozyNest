import { useState , useEffect} from "react"
import "./HeroSection.css"
import image1 from "../../assets/HeroSection1.jpg"
import image2 from "../../assets/Herosection5.jpg"
import image3 from "../../assets/HeroSection4.jpg"
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
        <div className="register">
        <button className=" button Login">Login</button>
        <button className="button SignUp">Signup</button></div>
        </div>
    
  )
}

export default HeroSection