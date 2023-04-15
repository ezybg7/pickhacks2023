import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Pantry</h1>
      <div className = "links">
        <ul>       
          <li><Link to = "/" className = "navbarButtons"> Home </Link></li>
          <li><Link to = "/about" className = "navbarButtons"> About </Link></li>
          <li><Link to = "/foods" className = "navbarButtons"> Foods </Link></li>
          <li><Link to = "/register" className = "navbarButtons"> Register </Link></li>
          <li><Link to = "/login" className = "navbarButtons"> Login </Link></li>
          <li><Link to = "/grocery-map" className = "navbarButtons"> Grocery Map </Link></li>
        </ul>


      </div>
    </nav>
   );

}
 
export default Navbar;

