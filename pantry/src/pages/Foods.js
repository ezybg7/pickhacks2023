import '../styles/Foods.css'
import FoodInput from '../components/FoodInput';
import FoodList from '../components/FoodList';
import { useState, useEffect }  from 'react';
import { TabTitle } from '../utilities/GeneralFunctions';
import { firebase } from "../firebaseConfig";

const Foods = () => {
  TabTitle('Foods - Pantry'); 

  const [Uid, setUid] = useState();

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

  useEffect(()=>{
    if (firebase.auth().currentUser)
      setUid(firebase.auth().currentUser.uid)
  },[])

  const addFood = () => {
    let timestamp = firebase.firestore.Timestamp.fromDate(new Date());
  }

  const ref = firebase
  .firestore()
  .collection("users")
  .doc(firebase.auth().currentUser.uid);

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