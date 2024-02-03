import {Route,Routes ,Link,NavLink} from 'react-router-dom'
import About from './About'
import Contact from './Contact';
import Location from './Location';
import './App.css';

function App() {
  return (
    <div>
      <h1>React Router Example</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <NavLink to="/location">Locationy</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/location" element={<Location />}/>
      </Routes>
    </div>
  );
}

export default App;
