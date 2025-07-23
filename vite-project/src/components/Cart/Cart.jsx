import img1 from "../../assets/Bed.jpeg";
import "./Cart.css"
const cart = [
  {
    id: 1,
    name: "Chair",
    quantity: 0,
    price: 100,
    total: 0,
    img: img1,
  },
  {
    id: 2,
    name: "Chair",
    quantity: 0,
    price: 100,
    total: 0,
    img: img1,
  },
  {
    id: 3,
    name: "Chair",
    quantity: 0,
    price: 100,
    total: 0,
    img: img1,
  },
];

const Cart = () => {
  return (
    <div className="Cart">
      <div className="cart-container">
        <div className="first-section">
          <h1>Your Shopping Cart</h1>
          <div className="cart-items">
            <div className="info">
              <span className="item-name">Item</span>
              <span className="item-price">Price</span>
              <span className="item-quantity">Quantity</span>
              <span className="item-total">Total</span>
            </div>
            {
              cart.map((item) => (
                <div className="item-card" key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <p className="price">{item.price} EGP</p>
                  <div className="quantity-counter">
                    <span className=" minuse">-</span>
                    <span>{item.quantity}</span>
                    <span className="  pluse">+</span>
                  </div>
                   <span className="total">{item.total}</span>

                </div>
              ))
            }
          </div>
        </div>

        <div className="second-section">
          <div className="continer">
            <h3>Order Summry</h3>
            <div className="order-info">
              <div className="items info">
                <p className="c1">items</p>
                <p className="c2">9</p>
              </div>
              <div className="sub-total info">
                <p className="c1">Sub Total</p>
                <p className="c2">3000</p></div>
              <div className="Shiping info">
                <p className="c1">Taxes</p>
                <p className="c2">0000</p>
              </div>
          
            </div>
            <div className="Total">
              <p className="c1">Total</p>
                <p className="c2">5430</p>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
