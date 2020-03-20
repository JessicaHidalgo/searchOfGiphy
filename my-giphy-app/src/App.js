import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Search from '../src/Components/Search/Search'

import './App.css';

class App extends Component {
  render (){
    return (
      <Router>
       <h1>Hello</h1>
       <Search></Search>
        
       
      
        </Router>
    )};
}

export default App;
