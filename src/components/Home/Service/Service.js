import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, imageURL, description, _id } = props.service;
    return (
        <div>
            <Col>
      <Card className="pb-3">
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
    {description}
          </Card.Text>
        </Card.Body>
        <Link to={`/booking/${_id}`}><button className="btn btn-success">Book Now</button> </Link> 
      </Card>
    </Col>
        </div>
    );
};

export default Service;