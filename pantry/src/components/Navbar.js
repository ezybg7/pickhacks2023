import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { firebase } from "../firebaseConfig";
import '../styles/Navbar.css'
import { loggedIn } from '../pages/Login';
import { onAuthStateChanged } from '@firebase/auth';

const Navbar = () => {
  const [showLoggedIn, setshowLoggedIn] = useState(true);
  /*
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({});
  
      
  onAuthStateChanged = async(user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);


 
  useEffect(()=>{
    setshowLoggedIn(firebase.auth().onAuthStateChanged(onAuthStateChanged));
    console.log(loggedIn);
    if(showLoggedIn)
    {
      console.log('a user logged in');
      //setshowLoggedIn(true); 
    }
    else
    {   
      console.log('NO user has logged in');
      //setshowLoggedIn(false);
    }
    }, [showLoggedIn]); 

  */
  return ( 
    <nav className="navbar">
      <h1 className='site-title'>Pantry</h1>
      {
        !showLoggedIn?<h2>Currently Logged In as </h2>:null
      }
      <div className = "links">     
          <Link to = "/" className = "navbarButtons"> Home </Link>
          <Link to = "/about" className = "navbarButtons"> About </Link>
          {
            showLoggedIn?<Link to = "/foods" className = "navbarButtonsFood"> Foods </Link>:null
          }
          <Link to = "/login" className = "navbarButtons"> Login </Link>
          <Link to = "/grocery-map" className = "navbarButtons"> Grocery Map</Link>
      </div>
    </nav>
   );

}
 
export default Navbar;

