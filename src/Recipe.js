import React from 'react';

import { Card , ListGroup , ListGroupItem } from 'react-bootstrap'

const Recipe = ({title , image , calories, ingredients}) =>{
    return(
        <Card className='col' style={{margin: '.4rem .8px' , width: '14rem' , borderBottom:'1px solid black'}} bg={'light'}>
            <Card.Img variant="top" src={image} height={'244px'} width={'144px'} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Calories: {calories}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <Card.Title>Ingredients</Card.Title>
                {ingredients.map((ingredent , index)=>(
                    <ListGroupItem key={index} style={{textAlign:'left'}}>
                        {ingredent.text.toString()}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Card>
    )
}

export default Recipe