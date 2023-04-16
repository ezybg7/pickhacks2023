import '../styles/FoodInput.css'

const FoodInput = ( { input, onChange }) => {
  return ( 
    <input 
      className = "input"
      input = {input} 
      onChange = { (e) => onChange(e.target.value)} 
    />
   );
}
 
export default FoodInput;