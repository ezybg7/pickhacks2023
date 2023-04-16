import '../styles/Login.css'
import { useEffect, useState } from 'react'
import firebaseConfig from './firebaseConfig';
import { TabTitle } from '../utilities/GeneralFunctions';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

const Login = () => {


  TabTitle('Login - Pantry'); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    useEffect(()=>{
        if(auth.currenUser)
            setLoggedIn(!true)
        else   
            setLoggedIn(!false)
        },[])

    const userSignUp = async() => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
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
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("You have signed in successfully!");
            setEmail('');
            setPassword('');
            setLoggedIn(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
        })
    }

    const userSignOut = async() => {
        await signOut(auth);
        setLoggedIn(false);
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
