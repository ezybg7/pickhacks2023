import LogInInput from '../components/LogInInput';
import '../styles/Login.css'
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    return (
        <div className = "container">
          <h1> Log in to your account.</h1>
          <div className = "inputStyles">
            <h2>Email:</h2>
            <LogInInput value = {email} onChange = {setEmail}/>
            
          </div>
          <div className = "inputStyles">
            <h2>Password:</h2>
            <LogInInput value = {password} onChange = {setPassword}/>
          </div>

          <h3>Don't have an account? <Link to = "/register" className = "regText"> Register here.</Link></h3>
        </div>
    );
}
 
export default Login;