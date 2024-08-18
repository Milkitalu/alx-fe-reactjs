
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

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
