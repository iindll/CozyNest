import success from "../../assets/success.png"
import { useNavigate } from "react-router-dom"
import "./payment.css"
const Payment = () => {
    const navigate = useNavigate()
  return (
    <div className='Payment'>
        
        <img src={success} alt="" />
        <h2>Payment succeeded!</h2>
        <p>your payment was completed successfuly,
            Thank you for your purchase</p>
        <button on onClick={()=>{
            navigate('../home')
        }}>Go to Home?</button>
    </div>
  )
}

export default Payment