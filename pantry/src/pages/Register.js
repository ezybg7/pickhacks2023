import LogInInput from '../components/LogInInput';
import '../styles/Register.css'
import {useState} from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <h2>Email:</h2>
            <LogInInput value = {email} onChange = {setEmail}/>
            <h2>Password:</h2>
            <LogInInput value = {password} onChange = {setPassword}/>
        </div>
    );
}
 
export default Register;