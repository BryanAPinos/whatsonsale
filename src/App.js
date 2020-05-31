import React from "react";
import "./App.css";
import User from "./components/user";
import SignIn from "./components/signin";
import Stores from "./components/stores";
import { Container } from "react-bootstrap";
import Account from "./components/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Router>
            <Switch>
              <Route path="/home">
                <Account />
                <Stores />
              </Route>
              <Route path="/createaccount">
                <User />
              </Route>
              <Route path="/signin">
                <SignIn />
              </Route>
            </Switch>
          </Router>
        </Container>
      </header>
    </div>
  );
}

export default App;
