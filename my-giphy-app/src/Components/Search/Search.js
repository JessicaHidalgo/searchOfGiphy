import React, { Component } from "react";
import { Input, Label, Button, Container } from "reactstrap";
import axios from "axios";
//Import the function from our service getGiphy
import { getGiphy } from "../Server/getGiphy";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { gifName: "", gifList: [] };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = e => {
    const gifName = e.target.value;
    this.setState({
      gifName
    });
  };

   onClick() {
     console.log(this.state.gifName);
      axios.get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: this.state.gifName,
        api_key: "nJ61VQellwL2APoHnuC20pLXFOFF20VW",
        limit: 10
      }
    }).then(response=>{
      console.log(response);
      this.setState({ gifList: response.data.data });
    });

    
  }

  mapData() {
    
    return (
      <div>
        {this.state.gifList.map(gif => (
          <div>
          <li>{gif.id}</li>
          <img src={gif.images.downsized.url}/>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <Label for="giphy">GET YOUR GIPHY</Label>
        <Input
          type="text"
          name="giphy"
          value={this.state.gifName}
          placeholder="Name your giphy!!"
          onChange={this.onChange}
        />
        <Button onClick={this.onClick}>GET</Button>
        {this.state.gifList ? this.mapData() : "Loading...."}
      </div>
    );
  }
}

export default Search;
