import '../styles/GroceryMap.css'
import Map from '../components/Map'
import { TabTitle } from '../utilities/GeneralFunctions';

const GroceryMap = () => {
  TabTitle('Grocery Map - Pantry');
    return (
        <div>
            <h2>Grocery stores in the area:</h2>
            <div className='map'>
                <Map/>
            </div>
        </div>
    );
}
 
export default GroceryMap;