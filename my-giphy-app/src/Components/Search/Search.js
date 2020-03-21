import React, { Component } from "react";
import { Input, Label, Button, Container} from "reactstrap";
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
          parent.setState({data:[...data.data]})
   
    }catch(err){
        this.gifname = false;}

    }
    
  mapData= () => { this.state.data.map(function(x){
    return(
    
    <img height="50" width="200" src={x.images.original.url}/>);
})}
 
  render() {
    const data = this.state.data;
    return (
      <>
        <Label for="giphy">GET YOUR GIPHY</Label>
        <Input
          type="text"
          name="giphy"
          value={this.state.gifname}
          placeholder="Name your giphy!!"
          onChange={this.onChange}
        />  
        <Button onClick={this.onClick}>GET</Button> 
        <Container>
        {this.mapData()}
        </Container>
        
      </>
     
    );

  } 
  
}

export default Search;