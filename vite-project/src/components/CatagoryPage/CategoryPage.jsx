 import "./CategoryPage.css";
// import image1 from "../../assets/Bed.jpeg"
// import image2 from "../../assets/Lighting.jpeg"
// import image3 from "../../assets/Sofa.jpeg"
import { useNavigate } from "react-router-dom";
import {Data} from "../../Data/proudcts.js"

const CategoryPage = () => {
  

  const navigate = useNavigate();
  // const categories = [
  //   { name: "Bed", image: image1 },
  //   { name: "Lights", image: image2 },
  //   { name: "Sofas", image: image3 },
  // ];

  return (
    <div className="CategoryPage">
      {Data.map((category, index) => (
        <div
        onClick={()=>{
          navigate(`../${category.name}`)
        }}
        key={index} className="category">
          <img src={category.image} alt={category.name} />
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
