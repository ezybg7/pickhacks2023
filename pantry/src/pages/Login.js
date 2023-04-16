import '../styles/Login.css'
import { useEffect, useState } from 'react'
import { TabTitle } from '../utilities/GeneralFunctions';
import { firebase } from "../firebaseConfig";

const Login = () => {


  TabTitle('Login - Pantry'); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(()=>{
        if(firebase.auth().currentUser)
            setLoggedIn(true)
        else   
            setLoggedIn(false)
        },[])

    const userSignUp = async() => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("Your account has been created!");
            setEmail('');
            setPassword('');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
        })
        
    }

    const userSignIn = async() => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("You have signed in successfully!");
            setEmail('');
            setPassword('');
            setLoggedIn(true)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
        })
    }

    const userSignOut = async() => {
        await firebase.auth().signOut();
        setLoggedIn(false)
    }

    return (
        <div className='form'>
            <div id="authForm">       
                {!loggedIn &&
                    <>
                        <h2>Sign Up or Sign In</h2>
                        <div>
                          <input className = "inputField" placeholder = "email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                          <input className = "inputField" placeholder = "password" value={password} onChange={(e) => setPassword(e.target.value)} type='password'/>
                        </div>
                        <div>
                          <button className="signUp-InButton" onClick={userSignUp}>Sign Up</button>
                          <button className="signUp-InButton" onClick={userSignIn}>Sign In</button>
                        </div>
                    </>
                }
                {loggedIn &&
                    <button className="signUp-InButton" onClick={userSignOut}>Sign Out</button>
                }
                
            </div>
        </div>
    );
}

export default Login;
