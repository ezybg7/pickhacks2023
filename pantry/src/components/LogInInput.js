import '../styles/LogInInput.css'

const LogInInput = ( { input, onChange}) => {
  return ( 
    <input className = "input" email = {input} onChange = { (e) => onChange(e.target.input)} />
   );
}
 
export default LogInInput;