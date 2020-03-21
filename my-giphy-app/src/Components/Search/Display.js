import React,{Component} from 'react';
import {Row,Col} from 'reactstrap';

class Gif extends Component{
    constructor(props){
        super(props)
        this.state={
            gifs:[]
        }
    }
    
    render(){
        
        
        return (
            <ul>
                {this.state.gifs.map((gif)=>
                <Col md={6}>
                <img src={gif.data.images.original.url}/>
                </Col>
                )}
             
            </ul>
        )
    }

}

 export default Gif
