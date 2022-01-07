import { Route,Routes } from 'react-router-dom';
 import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {

  return (
    <div>
      <Navbar /> 
      <Routes>
        <Route exact path="/" element={<Home />} />  
        <Route exact path="/about" element={<About/>} />  
        {/* <Route exact path="/services" element={<About/>} />   */}

      </Routes>
    </div>
  );
}

export default App;
