import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
// imports react router
// renames BrowserRouter to Router
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Router adds the ability to handle routing in react, wraps all components you want to have routing function with it
// Route renders out a component based on the url
// Switch stops the process of going through all available routes as soon at it goes to one path and matches a url

function App() {
  return (
    <Router>
      <div className="App">
        {/* No Route as want nav on top of all pages */}
        <Nav />
        <Switch>
          {/* "/" is usually stock for home page, but it can also trigger the route for /about or /shop since they both also contain a "/" */}
          {/* double routing can be avoided by using "exact" and is simplier than using Switch*/}
          <Route path="/" exact component={Home} />
          {/* Only want about to show when in about */}
          {/* Path is were you want it to go, component is what will be rendered when path is taken*/}
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
    </Router>
  );
}

// just a quick component without making a new .js file
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
