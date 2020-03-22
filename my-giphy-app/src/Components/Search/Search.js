import React, { Component } from "react";
import { Input, Label, Button} from "reactstrap";
import axios from "axios";

//Import the function from our service getGiphy

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
    axios
      .get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: this.state.gifName,
          api_key: "nJ61VQellwL2APoHnuC20pLXFOFF20VW",
          limit: 25
        }
      })
      .then(response => {
        console.log(response);
        this.setState({ gifList: response.data.data });
      });
  }

  mapData() {
    return (
      <section id="grid-images">
        {this.state.gifList.map(gif => (
          <div>
            <img className="photo" src={gif.images.downsized.url} />
          </div>
        ))}
      </section>
    );
  }

  render() {
    return (
      <div className='renderSearchComponents'>
     
        
        <Label for="giphy">GET YOUR GIPHY</Label>
        <Input
          type="text"
          name="giphy"
          value={this.state.gifName}
          placeholder="Name your giphy!!"
          onChange={this.onChange}
        />
        
        <Button color="secondary" onClick={this.onClick}>GET</Button>
        
        
        {this.state.gifList ? this.mapData() : "Loading...."}
        </div>
    );
  }
}

export default Search;
