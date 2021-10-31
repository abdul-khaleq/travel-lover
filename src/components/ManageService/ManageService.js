import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch('https://thawing-peak-73051.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    const handleDelete = id =>{
        const url =`https://thawing-peak-73051.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount){
                alert('Deleted')
                const remaining = services.filter(service => service._id !== id);
            setServices(remaining)
            } 
        })
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {/* {
                services.map(service => <div>
                    <h3>{service.name}</h3>
                    <button onClick={()=>handleDelete(service._id)}>Delete</button>
                </div>)
            } */}
            <Container className='py-5'>
                <Row xs={1} md={2} lg={3} className="g-4">

                {services.map(service => <Col>
      <Card className="pb-3">
        <Card.Img variant="top" src={service.imageURL} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>
    {service.description}
          </Card.Text>
        </Card.Body>
        <button className="btn btn-danger" onClick={()=>handleDelete(service._id)}>Delete</button> 
      </Card>
            </Col>)
}
                </Row>
            </Container>
        </div>
    );
};

export default ManageService;