import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="app__body">
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/room/:roomId">
              <Chat></Chat>
            </Route>
            <Route path="/">
              <h1>Welcom do the show</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
