import '../styles/Login.css'
import { useState, useEffect } from 'react'
import firebaseConfig from './firebaseConfig';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const placeHolderEmail = "email";
    const placeHolderPassword = "password";

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
                          <LogInInput placeholder = {placeHolderEmail} value={email} onChange={setEmail}/>
                          <LogInInput placeholder = {placeHolderPassword} value={password} onChange={setPassword}/>
                        </div>
                        <div>
                          <button className = "signUp-InButton" onClick={userSignUp}>Sign Up</button>
                          <button className = "signUp-InButton" onClick={userSignIn}>Sign In</button>
                          <button className = "signUp-InButton" onClick={userSignOut}>Sign Out</button>
                        </div>
                    </>
                }
                <button id="signOutButton" onClick={userSignOut}>Sign Out</button>
            </div>
        </body>
    );
}

export function userCredential(){};
export default Login;
