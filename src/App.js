import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/pages/home/home";
import ContactUs from "./components/pages/contactUs/contactUs";
import AboutUs from "./components/pages/aboutUs/aboutUs";
import TableListBeers from "./components/pages/listBeers/tableListBeers";
import Navbar from "./components/layout/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/contact-us">Users</Link>
              </li>
              <li>
                <Link to="/table-list-beers">Table List</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/contact-us">
              <ContactUs />
            </Route>
            <Route path="/table-list-beers">
              <TableListBeers />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
