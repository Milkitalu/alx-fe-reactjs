
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
    <Route exact path="./Home" component={Home} />
    <Route path="./About" component={About} />
    <Route path="./Services" component={Services} />
    <Route path="./Contact" component={Contact} />
    </div>
  );
}
export default App
