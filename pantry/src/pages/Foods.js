import FoodInput from '../components/FoodInput';
import FoodList from '../components/FoodList';
import firebaseConfig from './firebaseConfig';
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import userCredential from './Login';
import '../styles/Foods.css'
import { useState, useEffect }  from 'react';
import { TabTitle } from '../utilities/GeneralFunctions';

const Foods = () => {
  TabTitle('Foods - Pantry'); 
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [foodsList,  setFoodsList] = useState([
    { name: 'Apple', category: 'fruit', owner: 'user', expirationDate: 'null', id: 1 },
    { name: 'Pizza', category: 'restaurant', owner: 'user', expirationDate: 'null', id: 2 },
    { name: 'Tomato', category: 'fruit', owner: 'user', expirationDate: 'null', id: 3 }
  ]);

  const [inputFood, setInputFood] = useState([
    {name: 'Carrot', category: 'vegetable', owner: 'user2', expirationDate: '4/19', id: 4}
  ]);

  const handleDelete = (id) => {
      const newFoods = foodsList.filter(food => food.id !== id)
      setFoodsList(newFoods);
  };

  const addFood = () => {
    return db.collection("users").doc(userCredential.user.uid).set({
        food: []
    })
  }

  useEffect(() => {
    console.log('foodsList was changed');
  }, [foodsList]);

  return ( 
    <div>
        <FoodInput value = {inputFood} onChange = {setInputFood} />
        <button onClick = {addFood}>Add Food</button>
        <FoodList foods={foodsList} title = "All Foods List" handleDelete = {handleDelete}/>
        <FoodList foods = {foodsList.filter((foodsList) => foodsList.category === 'fruit')} title = "Fruits"/>
    </div>
   );
}
 
export default Foods;