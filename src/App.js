
import './App.css';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

//pages
import Home from './Components/Home';
import Destination from './Components/Destination'
import Crew from './Components/Crew';
import Technology from './Components/Technology';
//styles
import Header from './UI/Header';
function App() {

  return (
    <Router >
      <div className="App">
      <Header/>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='destination' element={<Destination/>}/>
        <Route path="crew" element={<Crew/>}/>
        <Route path='technology' element={<Technology/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
