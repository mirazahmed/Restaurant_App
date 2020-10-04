import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle,CardBody } from 'reactstrap';

class DishDetail extends Component{

    renderComments(comments) {

        if(comments !=null){

            const comment = comments.map((comment) => {

                return (
                    <div key={comment.id}>
                        <ul className="list-unstyled">                    
                            <li>{comment.comment} </li>
                            <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>                                    
                        </ul>                         
                    </div>   
                );
            });

            return(
                <Card>
                    <CardBody>
                        <CardTitle><h4>Comments</h4></CardTitle>
                        <CardText>
                            { comment }
                        </CardText>
                    </CardBody>
                </Card>
            );
        }

        else {
            return(
                <div></div>
            )
        }    
    
    }
   
   

    render(){

        console.log('DishDetail component render is invoked');
                
        return(                     
                                 
            <div>
                {this.props.dish ? (
                    <div className="row">
                        <div className="col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>                                     
                                </CardBody>                     
                            </Card>
                        </div>
                        <div className="col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}  
                        </div>
                    </div>)                                 
                : null}                                              
            </div>            
        );
    }

}




export default DishDetail;

