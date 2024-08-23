import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName="active">Hogar</NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName="active">Acerca de</NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName="active">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}
