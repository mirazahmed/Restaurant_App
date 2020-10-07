import React from 'react';
import { Card, CardImg, CardText, CardTitle,CardBody } from 'reactstrap';



    function RenderDish({dish}){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>                                     
                    </CardBody>                     
                </Card>
            </div>
        )
    }

    function RenderComments({comments}) {
        
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
                <div className="col-md-5 m-1">
                   
                    <h4>Comments</h4>
                    {/* <CardText> */}
                    <p> { comment } </p>
                                                            
                </div>
            );
        }

        else {
            return(
                <div></div>
            )
        }    
    
    }
   
   

    const DishDetail = (props) => {

        console.log('DishDetail component render is invoked');
                
        return(                  
                                 
            <div>
                {props.dish ? (
                    <div className="row">
                        <RenderDish dish={props.dish} />                                                           
                        <RenderComments comments= {props.dish.comments} />
                    </div>)                                 
                : null}                                              
            </div>            
        );
    }






export default DishDetail;

