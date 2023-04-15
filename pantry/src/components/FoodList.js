const FoodList = ({foods, title, handleDelete}) => {

  return ( 
      <div className = "food-list">
        <h1> {title} </h1>
        {foods.map((food) => (
        <div className="food-list-display" key = {food.id}>
          <h3>Name: { food.name }</h3>
          <h3>Category: {food.category}</h3>
          <h3>Owner: {food.owner}</h3>
          <h3>Exp. Date: {food.expirationDate}</h3>
          <button onClick={() => handleDelete(food.id)}>Delete Food</button>
        </div>
        ))}  
      </div>
   );
}
 
export default FoodList;