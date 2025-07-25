import "./Login.css"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='Login'>
        <form >
            <div className="userInfo">
            <div className="text-section">
            <h2 style={{margin:0}} >Welcome Back</h2></div>
            <input type="text" placeholder="Email/Username" />
            <input type="password" placeholder="password" />
            <div className="Forgetlink">
                <Link className="Forget" to="./forget-password">Forget Password?</Link>
            </div>
            <div className="button-Login">
                <button>Login</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Login