import React, { Component } from "react";
import { Input, Label, Button, Row, Col } from "reactstrap";
//Import the function from our service getGiphy
import {getGiphy} from '../Server/getGiphy';
import { BrowserRouter as Router } from "react-router-dom";
import Gif from './Display';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = 
      {gifname:"",
       data :[]
    };
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
    console.log(gifname);
    const parent= this;
    
    try{

        const data= await getGiphy(gifname)
          parent.setState({data:data})
            
        
        console.log(data)   
    }catch(err){
        this.gifname = false;}

    }
  render() {
    const data = this.state.data;
    return (
      <Router>
        <Label for="giphy">GET YOUR GIPHY</Label>
        <Input
          type="text"
          name="giphy"
          value={this.state.gifname}
          placeholder="Name your giphy!!"
          onChange={this.onChange}
        />  
        <Button onClick={this.onClick}>GET</Button>
        {data.map(p=>(
              <Row>
                  <Col md='6'></Col>
                  <img src={p.images.original}/>
                  
              </Row>
          )) } 
      </Router>
     
    );

  } 
  
}

export default Search;
