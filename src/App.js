import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <h1>Hey</h1>

      {/**Header */}
      <Header></Header>
      <div className="app__body">
        <Sidebar></Sidebar>
      </div>
      {/**React-ROuter */}
    </div>
  );
}

export default App;
