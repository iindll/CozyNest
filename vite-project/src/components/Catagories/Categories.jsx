// FeaturedCategories.jsx
import './Catagories.css';

import img1 from "../../assets/Sofa.jpeg"
import img2 from "../../assets/Cabinets.jpeg"
import img3 from "../../assets/Tables.jpeg"
import img4 from "../../assets/Bed.jpeg"
import img5 from "../../assets/TV.jpeg"
import img6 from "../../assets/Lighting.jpeg"
import img7 from "../../assets/Shelves.jpeg"
import img8 from "../../assets/Diningroom.jpeg"
import img9 from "../../assets/wallArt.jpeg"


const categories = [
  { name: "Sofas", img: img1},
  { name: "Cabinets", img: img2},
  { name: "Beds", img: img4 },
  { name: "Tables", img: img3 },
  { name: "TV Units", img: img5 },
  { name: "Shelves", img:img7 },
  { name: "Lighting", img: img6},
    { name: "Dining Room", img: img8},
  { name: "Wall Art", img: img9},

];

const Categories = () => {
  return (
    <div className="FeaturedCategories">
      <h2>Shop by Category</h2>
      <p>Refine your search through curated categories designed to suit every taste</p>
      <div className="category">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <img src={cat.img} alt={cat.name} />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
