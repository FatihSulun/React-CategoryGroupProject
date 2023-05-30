import { Component } from "react";
import {Container,Row,Col} from 'reactstrap'
import Navbar from './Navbars'
import Category from './Categories'
import Peoples from './Peoples'
export default class App extends Component {
  state={
    peoples:[]
  }
  getCurrentCategory=(category)=>{
    this.getPeoples(category.id);
  }
  getPeoples(categoryId){
    let url="http://localhost:3000/peoples"
    if(categoryId){
      url+="?groupId="+categoryId
      fetch(url).then((response)=>response.json()).then((data)=>this.setState({peoples:data}))
  
    }
  }
  componentDidMount(){
    this.getPeoples();
  }
  render(){
    return (
      <div className="App">
        <Navbar></Navbar>
        <Container>
          <Row>
            <Col sm="6">
              <Category getCurrentCategory={this.getCurrentCategory}></Category>
            </Col>
            <Col sm="6">
              <Peoples peoples={this.state.peoples}></Peoples>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
}
