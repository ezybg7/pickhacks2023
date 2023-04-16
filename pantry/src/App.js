import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Foods from './pages/Foods';
import Login from './pages/Login';
import GroceryMap from './pages/GroceryMap';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'


function App() {
  return (

    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/foods' element={<Foods/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/grocery-map' element={<GroceryMap/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
