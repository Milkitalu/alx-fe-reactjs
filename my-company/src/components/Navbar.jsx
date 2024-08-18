
import { Link } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';
function Navbar() {
    return (
        <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
  
        <Route exact path="./Home" component={Home} />
        <Route path="./About" component={About} />
        <Route path="./Services" component={Services} />
        <Route path="./Contact" component={Contact} />
      </div>
    );
}

export default Navbar