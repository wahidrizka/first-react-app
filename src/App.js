import React from "react";
import "./App.css";
import NavigationButton from "./components/components.navigation/navigation.button";
import Avatar from "./components/components.navigation/avatar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./components/components.about/about.base";
import Experiences from "./components/components.experiences/experiences.base";
import Education from "./components/components.edu/edu.base";
import Skills from "./components/components.skills/skills.base";
import Interests from "./components/components.interests/interests.base";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container use-font">
          {/* Sidebar */}
          <aside className="container__sidebar sidebar__effect">
            <Link to="/">
              <Avatar />
            </Link>
            <Link to="/about">
              <NavigationButton btnLabel="About" />
            </Link>
            <Link to="/experiences">
              <NavigationButton btnLabel="Experiences" />
            </Link>
            <Link to="/education">
              <NavigationButton btnLabel="Education" />
            </Link>
            <Link to="/skills">
              <NavigationButton btnLabel="Skills" />
            </Link>
            <Link to="/interests">
              <NavigationButton btnLabel="Interests" />
            </Link>
            <Link to="/awards">
              <NavigationButton btnLabel="Awards" />
            </Link>
          </aside>

          {/* Main */}
          <main className="container__main container__main__effect">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/experiences">
                <Experiences />
              </Route>
              <Route path="/education">
                <Education />
              </Route>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route path="/interests">
                <Interests />
              </Route>
              <Route path="/awards"></Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
