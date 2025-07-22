import "./TopCollection.css";
import Top1 from "../../assets/Top1.jpeg";
import Top2 from "../../assets/Top2.jpeg";
import Top3 from "../../assets/Top3.jpeg";
import Top4 from "../../assets/Top4.jpeg";

const TopCollection = () => {
  return (
    <div className='TopCollection'>
      <div className="container">
        <div className="text-section">
          <h1>Top Collection</h1>
          <p>Our most admired pieces by visitors</p>
        </div>

        <div className="items">
          <div className="item">
            <div className="image-wrapper">
              <img src={Top1} alt="Wavy Mirror Shelf" />
              <div className="product-name">Wavy Mirror Shelf</div>
            </div>
          </div>

          <div className="item">
            <div className="image-wrapper">
              <img src={Top2} alt="Wooden Standing Mirror" />
              <div className="product-name">Wooden Standing Mirror</div>
            </div>
          </div>

          <div className="item">
            <div className="image-wrapper">
              <img src={Top4} alt="Rattan Shoe Cabinet" />
              <div className="product-name">Rattan Shoe Cabinet</div>
            </div>
          </div>

          <div className="item">
            <div className="image-wrapper">
              <img src={Top3} alt="Glass Door Cabinet" />
              <div className="product-name">Glass Door Cabinet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
