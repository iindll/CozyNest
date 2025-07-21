import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <p>Cozy<span>N</span>est</p>
        </div>
        <div className="nav-links">
        <p>Home</p>
        <p>Categories</p>
        <p>Offers</p>
        <p>Branches</p>
        <p>Contact</p>

        </div>
    </div>
  )
}

export default Navbar