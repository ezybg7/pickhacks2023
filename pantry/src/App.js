import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Foods from './pages/Foods';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'

function App() {
  const title = 'Welcome to the website!';

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/foods' element={<Foods/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
