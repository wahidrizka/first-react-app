import React from "react";
import "./App.css";
import NavigationButton from "./components/components.navigation/navigation.button";
import Avatar from "./components/components.navigation/avatar";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";


import { IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

import About from "./components/components.about/about.base";
import Experiences from "./components/components.experiences/experiences.base";
import Education from "./components/components.edu/edu.base";
import Skills from "./components/components.skills/skills.base";
import Interests from "./components/components.interests/interests.base";
import SocialIcon from "./components/components.navigation/navigation.button-social";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container use-font">
          {/* Sidebar */}
          <aside className="container__sidebar sidebar__effect">
            <NavLink exact to="/">
              <Avatar />
            </NavLink>
            <NavLink to="/about">
              <NavigationButton btnLabel="About" />
            </NavLink>
            <NavLink to="/experiences">
              <NavigationButton btnLabel="Experiences" />
            </NavLink>
            <NavLink to="/education">
              <NavigationButton btnLabel="Education" />
            </NavLink>
            <NavLink to="/skills">
              <NavigationButton btnLabel="Skills" />
            </NavLink>
            <NavLink to="/interests">
              <NavigationButton btnLabel="Interests" />
            </NavLink>
            <NavLink to="/awards">
              <NavigationButton btnLabel="Awards" />
            </NavLink>
            <div className="container__socialicon">
              <SocialIcon link="https://www.linkedin.com/in/wahidrizka/" btnIcon={<IoLogoLinkedin />} />
              <SocialIcon link="https://github.com/wrfOxobz" btnIcon={<IoLogoGithub />} />
              <SocialIcon link="https://www.instagram.com/wahidrizka/" btnIcon={<IoLogoInstagram />} />
            </div>
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
