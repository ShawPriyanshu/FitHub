import './App.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import About from './components/About'
import Testtimonials from './components/Testtimonials';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  return (
  <>
  <Router>
  <Navbar/>
  <Switch>
          <Route exact path="/">
          <Hero/>
          </Route>
          <Route exact path="/categories">
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
