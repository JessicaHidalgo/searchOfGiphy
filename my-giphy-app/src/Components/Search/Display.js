import React,{Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

class Gif extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    
    render(){
        const gif=this.props.gif
        
        return <Container>
        {
          gif.map(p=>(
              <Row>
                  <Col md='6'></Col>
                  <img src={p.images.original}/>
                  
              </Row>
          ))  
        }
        </Container>
    }

}

 export default Gif
