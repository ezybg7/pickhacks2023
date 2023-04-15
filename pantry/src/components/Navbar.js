import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Navigation Bar</h1>
      <div className = "links">

        <Link to = "/" className = "navbarButtons"> Home </Link>
        <Link to = "/about" className = "navbarButtons"> About </Link>
        <Link to = "/foods" className = "navbarButtons"> Foods </Link>
        <Link to = "/register" className = "navbarButtons"> Register </Link>
        <Link to = "/login" className = "navbarButtons"> Login </Link>

      </div>
    </nav>
   );
}
 
export default Navbar;

