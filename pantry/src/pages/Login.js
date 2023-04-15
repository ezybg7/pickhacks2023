import LogInInput from '../components/LogInInput';
import '../styles/Login.css'
import {useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className = "inputStyles">
            <h2>Email:</h2>
            <LogInInput value = {email} onChange = {setEmail}/>
            <h2>Password:</h2>
            <LogInInput value = {password} onChange = {setPassword}/>
        </div>
    );
}
 
export default Login;