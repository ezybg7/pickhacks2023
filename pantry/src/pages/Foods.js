import '../styles/Foods.css'
import { Link } from 'react-router-dom';
import FoodInput from '../components/FoodInput';
import { useState, useEffect }  from 'react';
import { TabTitle } from '../utilities/GeneralFunctions';
import { firebase } from "../firebaseConfig";

const Foods = () => {
  TabTitle('Foods - Pantry'); 

  const [Uid, setUid] = useState();
  const [array, setArray] = useState([]);
  const [date, setDate] = useState();
  const [foodList, setFoodList] = useState([]);
  const [dateList, setDateList] = useState([]);
  const [inputFood, setInputFood] = useState('');
  const [init, setInit] = useState(true);

  const handleDelete = (i) => {
    foodList.splice(i, 1);
    dateList.splice(i, 1);
    setFoodList([...foodList]);
    setDateList([...dateList]);
    
    firebase.firestore().collection('users').doc(Uid).update({
      food: dateList,
      date: foodList
    })
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUid(user.uid)
      }
    });
    console.log(firebase.auth().currentUser);
    if (firebase.auth().currentUser){
        const ref = firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
        ref.get().then((snapshot)=>{
          if(snapshot.exists){
            setFoodList([...snapshot.data().food]);
            setDateList([...snapshot.data().date]);
          }
          setInit(false);
        })
      }
      else{
        setInit(false);
      }
  }, [])


  const addFood = () => {
    if (firebase.auth().currentUser){
      const ref = firebase
      .firestore()
      .collection("users")
      .doc(Uid);
      ref.get().then((snapshot)=>{
        console.log();
        if(snapshot.exists && Object.keys(snapshot.data()).length > 0){
          console.log(snapshot.data());
          let temp = snapshot.data().food;
          firebase.firestore().collection('users').doc(Uid).update({
            food:[...temp, inputFood],
            date:[...snapshot.data().date, date]
          })
          setArray([...temp, inputFood]);
        }
        else{
          setArray([inputFood]);
          firebase.firestore().collection('users').doc(Uid)
          .set({
            food:[inputFood],
            date:[date]
          })
        }
        setFoodList([...foodList, inputFood]);
        setDateList([...dateList, date]);
      })
    }
  }
  
  if (init) return null;

  return ( 
    <div className='body'>
      {Uid &&
        <>
        <div className='input-field'>
          <FoodInput value = {inputFood} onChange = {setInputFood} />
          <input onChange = {e=> setDate(e.target.value)}type="datetime-local" id="meeting-time"
          name="meeting-time" value= {date}
          min={Date(Date.now())}></input>

          <button onClick = {addFood}>Add Food</button>
        </div>
        <div>
          {foodList.map((food, i) => (
            <div className='food-list-display' onClick={() => handleDelete(i)}>
              <p>Food: {food}</p>
              <p>Expiration date: {dateList[i].toString()}</p>
            </div>
          ))}
        </div>
        </>
      }
      
      <div className = "warning">
        {!Uid &&
          <Link to = "/login"> Please sign in to see your Pantry! </Link>
        }
      </div>
        
    </div>
    
   );
}
 
export default Foods;