import "./SignUp.css"
import { Link } from "react-router-dom";
import imge from "../../assets/Signup.jpg"
const SignUp = () => {
  return (
    <div className='SignUp'>
    <img src={imge} alt="" />

      
        <form >
            <div className="userInfo">
            <div className="text-section">
            <h2 style={{margin:0}} >Create Account</h2></div>
            <input type="text" placeholder="Email/Username" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="repete your password"  />
            <div className="button-signup">
                <button>SignUp</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default SignUp