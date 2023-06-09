import '../styles/Login.css'
import { useEffect, useState } from 'react'
import { TabTitle } from '../utilities/GeneralFunctions';
import { firebase } from "../firebaseConfig";
const Login = () => {


  TabTitle('Login - Pantry'); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(false);
    const [error, setError] = useState(false);
    

    useEffect(()=>{
        if(firebase.auth().currentUser){
            setUsername(firebase.auth().currentUser.email);
            setLoggedIn(true)
        }
        else   
            setLoggedIn(false)
        },[])


    let timestamp = firebase.firestore.Timestamp.fromDate(new Date());
    let expirationDate = firebase.firestore.Timestamp.fromDate(new Date());

    const userSignUp = async() => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("Your account has been created!");
            setEmail('');
            setPassword('');
        })
        .then(async ()=> {
            await firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .set({
                food:[],
                timestamp,
                expirationDate
            })
        })
        .catch((error) => {
            setError(true);
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
            //setEmail(' ') uncomment if the line below broke the code sorry
            setEmail(email.substring(0, email.indexOf("@")));
            setPassword('');
            setLoggedIn(true)
            setError(false);
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
        setError(false);
    }

    return (
        <div className='form'>
            <div className="authForm">       
                {!loggedIn &&
                    <>
                        <h2>Sign Up or Sign In</h2>
                        <h4>You must log in before using the Foods tab.</h4>
                        <div>
                          <input className = "inputField" placeholder = "email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                          <input className = "inputField" placeholder = "password" value={password} onChange={(e) => setPassword(e.target.value)} type='password'/>
                        </div>
                        <div>
                          <button className="signUp-InButton" onClick={userSignUp}>Sign Up</button>
                          <button className="signUp-InButton" onClick={userSignIn}>Sign In</button>
                        </div>
                        {error &&
                            <h3 className='error'>Email already exists</h3>
                        }
                    </>
                }
                {loggedIn &&
                    <>
                      <h1 className="bruh"> Welcome to Pantry, {username.substring(0, username.indexOf('@'))}! </h1>
                      <h2>Click Here to Sign Out</h2>
                      <div>
                        <button className= "bruh2" onClick={userSignOut}>Sign Out</button>
                      </div>
                    </>
                }
                
            </div>
        </div>
    );
}
export var loggedIn; 
export default Login;
