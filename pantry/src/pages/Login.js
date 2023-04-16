import '../styles/Login.css'
import { useState } from 'react'
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
        <body className='form'>
            <div id="authForm">       
                {!loggedIn &&
                    <>
                        <h2>Sign Up or Sign In</h2>
                        <div className = "inputField">
                          <input placeholder = "email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                          <input placeholder = "password" value={password} onChange={(e) => setPassword(e.target.value)} type='password'/>
                        </div>
                        <div>
                          <button id="signUpButton" onClick={userSignUp}>Sign Up</button>
                          <button id="signInButton" onClick={userSignIn}>Sign In</button>
                        </div>
                    </>
                }
                {loggedIn &&
                    <>
                        <button id="signOutButton" onClick={userSignOut}>Sign Out</button>
                    </>
                }
                
            </div>
        </body>
    );
}

export function userCredential(){};
export default Login;
