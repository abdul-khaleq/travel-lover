import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

    const {_id} = useParams();
    // console.log(_id)
    const [details , setDetails] = useState([]);
    useEffect(()=>{
        fetch('https://thawing-peak-73051.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    const bookDetail = details.filter(detail => detail._id === _id);
    // console.log(bookDetail)
    const { user} = useAuth();
    // console.log(user)
    return (
        <div className="">
           <Container className='py-5'>
                <Row xs={1} md={2} className="g-4">

         <Col>
      <Card className="pb-3">
        <Card.Img variant="top" src={bookDetail[0]?.imageURL} />
        <Card.Body>
          <Card.Title>{bookDetail[0]?.name}</Card.Title>
          <Card.Text>
    {bookDetail[0]?.description}
          </Card.Text>
        </Card.Body>
        <button className="btn btn-danger">Delete</button> 
      </Card>
            </Col>
             <Col>
<div className="add-services">
<form onSubmit={handleSubmit(onSubmit)}>
      <input  id="name" {...register("name", { required: true, maxLength: 20 })}  value={user.displayName}/>
      <input {...register("email", { required: true, maxLength: 20 })} value={user.email}/>
      <input {...register("address", { required: true, maxLength: 20 })} placeholder="Address"/>
      <input type="number" {...register("number", { required: true, maxLength: 20 })} placeholder="Phone number"/>
      <input className="btn btn-primary" type="submit" />
    </form>
</div>
            </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Booking;