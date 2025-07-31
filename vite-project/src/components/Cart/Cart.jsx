import "./Cart.css"
import Data from "../../Data/proudcts";
import CartItems from"./Cart.js"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Cart = () => {

const [cart_Items, setCartItems] = useState(CartItems)
const [useCredit ,setuseCredit] = useState(false)
const navigate = useNavigate();
function handlePaymentMethod(value) {
  setuseCredit(value);
}


function handleDelete(id){
const updatedCart = cart_Items.filter((item) => item.id !== id);
setCartItems(updatedCart)
}


function handleAdd(id) {
  const updatedCart = cart_Items.map(item => 
    item.id === id ? { ...item, quantity: item.quantity + 1,
       totalPrice: (item.quantity + 1) * item.price }
        : item
  );
  setCartItems(updatedCart);
}

const itemsCount = cart_Items.reduce((acc, item) => acc + item.quantity, 0);
const subTotal = cart_Items.reduce((acc, item) => acc + item.price * item.quantity, 0);
const taxes = subTotal * 0.1; // example 10% tax
const total = subTotal + taxes;

function handleMinus(id) {
  const updatedCart = cart_Items.map(item =>
    item.id === id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price }
      : item
  );
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
                    <div onClick={()=>handleMinus(item.id)} className=" minuse">
                      <p className="span-minuse">-</p>
                    </div>
                    <span className="Quantity">{item.quantity}</span>
                    <div  onClick ={()=>handleAdd(item.id)}  className=" pluse">
                      <p className="span-pluse">+</p>
                    </div>
                  </div>
                   <span className="total">{item.totalPrice}</span>
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
                <p className="c2">{itemsCount}</p>
              </div>
              <div className="sub-total information">
                <p className="c1">Sub Total</p>
                <p className="c2">{subTotal}</p></div>
              <div className="Shiping information">
                <p className="c1">Taxes</p>
                <p className="c2">{taxes}</p>
              </div>
          
            </div>
            <div className="Total information">
              <p className="c1">Total</p>
                <p className="c2">{total}</p>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    <div className="paymentDetailes">
        <form >
          <div className="filed">
          <p>Full Name</p>
          <input type="text" placeholder="full Name" />
          </div>
         
           <div className="filed">
          <p>Mobile Number</p>
          <input type="text" placeholder="your number" />
         </div>
          <div className="filed">
          <p>Streat</p>
          <input type="text" placeholder="Street Address" />
          </div>
             <div className="filed">
  <p>Detailed Address</p>
  
  <input type="text" 
    placeholder="Apartment, building .No" 
    aria-rowcount={2}
></input></div>
           <div className="filed">
          <p>City</p>
          <input type="text" placeholder="City" />
          </div>
           <div className="filed">
          <p>Country </p>
          <input type="text" placeholder="Country" />
        </div>
           <div className="filed">
          <input type="radio" id="cridetcard"  name="payment"/>
          <label onClick={()=>handlePaymentMethod(!useCredit)}for="cridetcard">cridet card</label>
          <input type="radio" id="cash"  name="payment"/>
          <label for="cridetcard">cash</label>    </div>

           {useCredit && (
  <div className="card-info">
    <p>Card Number</p>
    <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />
    <p>Expiration Date</p>
    <input type="month" />
    <p>CVV</p>
    <input type="password" placeholder="CVV" />
  </div>
)}
        <button onClick={()=> {
          navigate('../successPayment') 
        }} className="checkout-btn">Place Order</button>

        </form>
      </div>
    </div>

  );
};

export default Cart;
