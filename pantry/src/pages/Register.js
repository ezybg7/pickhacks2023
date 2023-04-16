import LogInInput from '../components/LogInInput';
import '../styles/Register.css'
import {useState, useEffect} from 'react';
import { TabTitle } from '../utilities/GeneralFunctions';

const Register = () => {
  TabTitle('Register  - Pantry');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    return (
      <div className = "container">
        <h1> Create and register an account.</h1>
        <div className = "inputStyles">
          <h2>Email:</h2>
          <LogInInput value = {email} onChange = {setEmail}/>
          
        </div>
        <div className = "inputStyles">
          <h2>Password:</h2>
          <LogInInput value = {password} onChange = {setPassword}/>
        </div>
    </div>
    );
}
 
export default Register;