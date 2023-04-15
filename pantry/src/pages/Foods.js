import '../styles/Foods.css'
import { useState }  from 'react';

const Foods = () => {
  const [foodsList,  setFoodsList] = useState([
    { name: 'Apple', category: 'fruit', owner: 'user', expirationDate: 'null', id: 1 },
    { name: 'Pizza', category: 'restaurant', owner: 'user', expirationDate: 'null', id: 2 },
    { name: 'Tomato', category: 'fruit', owner: 'user', expirationDate: 'null', id: 3 }
  ])
  return ( 
    <div>
      <h1>Foods List</h1>
      {foodsList.map((food) => (
        <div className="food-list-display" key = {food.id}>
          <h3>Name: { food.name } Category: {food.category} Owner: {food.user} Exp. Date: {food.expirationDate}</h3>
        </div>
      ))}

      <p> i will add a button later too lazy rn</p>
    </div>
   );
}
 
export default Foods;