import React, { Component } from "react";
import { Input, Label, Button } from "reactstrap";
//Import the function from our service getGiphy
import {getGiphy} from '../Server/getGiphy';
import { BrowserRouter as Router } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {gifname:""};
  }

  onChange = e => {
    const gifname = e.target.value;
    this.setState({
      gifname
    });
  };

  onClick = async(e) =>{
    e.preventDefault()
    const {gifname}= this.state
    console.log(gifname)

  }

  render() {
    return (
      <Router>
        <Label for="giphy">GET YOUR GIPHY</Label>
        <Input
          type="text"
          name="giphy"
          value={this.state.gifname}
          placeholder="Name your giphy!!"
          onChange={this.onChange}
        >
          
        </Input>
        <Button onClick={this.onClick}>GET</Button>
      </Router>
    );
  }
}

export default Search;
