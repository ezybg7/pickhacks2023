import '../styles/Login.css'
import { useState, useEffect } from 'react'
import firebaseConfig from './firebaseConfig';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
//Update the below URL with the appropriate version if necessary.
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";



const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const userSignUp = async() => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
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
        <body>
            <div id="authForm">
                <h2>Sign Up or Sign In</h2>
                <input value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password'/>
                {loggedIn &&
                    <>
                        <button id="signUpButton" onClick={userSignUp}>Sign Up</button>
                        <button id="signInButton" onClick={userSignIn}>Sign In</button>
                    </>
                }
                <button id="signOutButton" onClick={userSignOut}>Sign Out</button>
            </div>
        </body>
    );
}

export default Login;