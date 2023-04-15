import '../styles/Navbar.css'

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Navigation Bar</h1>
      <div className = "links">
        <a href = "/" className = "navbarButtons"> Home </a>
        <a href = "/other_page" className = "navbarButtons"> Other Page </a>
      </div>
    </nav>
   );
}
 
export default Navbar;

