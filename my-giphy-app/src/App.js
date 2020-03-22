import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "../src/Components/Search/Search";
import giphy from "../src/giphy.svg";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="logo">
          <img src={giphy} />

          <h1>YOUR GIPHY SEARCH APP</h1>
        </div>
        
        <Search></Search>
      </Router>
    );
  }
}

export default App;
