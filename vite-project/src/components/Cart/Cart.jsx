import "./Cart.css"
import Data from "../../Data/proudcts";
import CartItems from"./Cart.js"
import { useState } from "react";

const Cart = () => {
const [cart_Items, setCartItems] = useState(CartItems)

  function handleDelete(id) {
    const updatedCart = cart_Items.filter(item => item.id !== id);
    setCartItems(updatedCart);
  }

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
              cart_Items.map((item) => (
                <div className="item-card" key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <p className="price">{item.price} EGP</p>
                  <div className="quantity-counter">
                    <div className=" minuse">
                      <p className="span-minuse">-</p>
                    </div>
                    <span>{item.quantity}</span>
                    <div className=" pluse">
                      <p className="span-pluse">+</p>
                    </div>
                  </div>
                   <span className="total">{item.total}</span>
                   <button onClick={()=>handleDelete(item.id)} className="DeleteItem">Delete</button>
                </div>
                
              ))
            }
          </div>
        </div>

        <div className="second-section">
          <div className="continer">
            <h3>Order Summry</h3>
            <div className="order-info">
              <div className="items information">
                <p className="c1">items</p>
                <p className="c2">9</p>
              </div>
              <div className="sub-total information">
                <p className="c1">Sub Total</p>
                <p className="c2">3000</p></div>
              <div className="Shiping information">
                <p className="c1">Taxes</p>
                <p className="c2">0000</p>
              </div>
          
            </div>
            <div className="Total information">
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
