import "./Byroom.css"
import Livingroom from "../../assets/Livingroom1.jpeg"
import BedRoom from "../../assets/BedRoom.jpeg"
import DinigRoom from "../../assets/DiningRoom2.jpeg"


const Byroom = () => {
    let images = [
        { name:"living Room" , img:Livingroom},
        {name:"Dining Room " , img:DinigRoom},
        {name:"Bed Room",img:BedRoom}
    ]
  return (
    <div className='Byroom'>
     <div className="container">
        <div className="text-section">
<h2>Buy by Room</h2>
<p>Explore furniture tailored for every room in your home</p>
        </div>
        <div className="Room-types">
            {images.map((i,index)=>(
                <div className="Room-card" key={index}>
                    <img src={i.img} alt="" />
                    <p className="Room-name">{i.name}</p></div>
            ))}
        </div>
     </div>
    </div>
  )
}

export default Byroom