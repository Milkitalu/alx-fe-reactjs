
import { Link } from "react-router-dom";

function Navbar(){
  return (
    <>
      <nav style={{backgroundColor:black,justifyContent:'inLine',}}>
        <ul style={{ padding:'10px', listStyle:'none', display:'flex', alignContent:'spaceBetween'}}>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  )
};

export default Navbar;
