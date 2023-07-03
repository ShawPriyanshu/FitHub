import './App.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import About from './components/About'
import Testtimonials from './components/Testtimonials';
import {
  HashRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Equipments from './components/Equipments';



function App() {

  return (
  <>
  <Router>
  <Navbar/>
  <Switch>
          <Route exact path="/">
          <Hero/>
          
          </Route>
          <Route path="/categories">
          <Categories/>
          </Route>
          <Route exact path="/about">
        <About/>
          </Route>
          <Route exact path="/testimonials">
          <Testtimonials/>
          </Route>
  </Switch>
  </Router>
    </>
  );
}

export default App;
