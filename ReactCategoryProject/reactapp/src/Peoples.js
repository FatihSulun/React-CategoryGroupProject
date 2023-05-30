import React, { Component } from "react";
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap'

export default class Peoples extends Component{
    

    render(){
        const {peoples}=this.props;
        return(
            
            <Card>
                {peoples.map((people)=>(
                   
                  <CardBody>
                    <img style={{width:100,height:100}}
                    alt="Sample"
                    src={people.image}
                  />
                    <CardTitle tag="h5">
                      {people.Name}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      {people.Surname}
                    </CardSubtitle>
                    <CardText>
                      Group Id: {people.groupId}
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                ))}
                 
            </Card>
        )
    }
}