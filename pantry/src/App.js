//import './styles/App.css';
import Navbar from './components/Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the website!';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
