import '../styles/LogInInput.css'

const LogInInput = ( { placeholder, input, onChange}) => {
  return ( 
    <input className = "input" 
    placeholder = {placeholder}
    email = {input} 
    onChange = { (e) => onChange(e.target.input)} />
   );
}
 
export default LogInInput;