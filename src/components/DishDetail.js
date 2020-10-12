import React from 'react';
import { Card, CardImg, CardText, CardTitle,CardBody,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import  { Link } from 'react-router-dom';



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

        // console.log('DishDetail component render is invoked');
        // {props.dish ? 

        return (
            <div>

            {props.dish ? (
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>

                    <div className="row">
                        <RenderDish dish={props.dish} />                                                           
                        <RenderComments comments= {props.comments} />
                    </div>
                </div>)
                 : null}
            </div>)
               
    }






export default DishDetail;

