
import './App.css';
import Nabbar from './Pages/Shared/Nabbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';



function App() {
  return (
    
      <div>
        <Nabbar></Nabbar>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="about" element={<About/>} />
      </Routes>
      </div>
   
  );
}

export default App;
