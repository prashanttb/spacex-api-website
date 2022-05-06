import './App.css';
import Home from './components/home'
import LaunchInfo from './components/launchInfo'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/details/:id" element={<LaunchInfo/>}></Route>
      </Routes>
    </Router>
  
  );
}

export default App;
