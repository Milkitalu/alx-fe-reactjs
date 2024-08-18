
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return(
    <div>
    <Navbar />
    <Route exact path="./Home" element={Home} />
    <Route path="./About" element={About} />
    <Route path="./Services" element={Services} />
    <Route path="./Contact" element={Contact} />
    </div>
  );
}
export default App
