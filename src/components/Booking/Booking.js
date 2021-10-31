import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {


  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
    // axios.post('http://localhost:5000/services', data)
    // .then(res =>{
    //     if(res.data.insertedId){
    //         alert('added successful');
    //         reset();
    //     }
    // })
  };




    const {_id} = useParams();
    // console.log(_id)
    const [details , setDetails] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    const bookDetail = details.filter(detail => detail._id === _id);
    console.log(bookDetail)
    const { user} = useAuth();
    console.log(user)


    const handleDelete = id =>{
      const url =`http://localhost:5000/services/${id}`;
      fetch(url, {
          method: 'DELETE'
      })
      .then(res =>res.json())
      .then(data =>{
          // console.log(data)
          // if(data.deletedCount){
          //     alert('Deleted')
          //     const remaining = services.filter(service => service._id !== id);
          // setServices(remaining)
          // } 
      })
  }
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
        {/* <button className="btn btn-danger" onClick={handleDelete}>Delete</button>  */}
      </Card>
            </Col>
             <Col>
                <h2>Form</h2>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="name" placeholder="Name" value={user.displayName} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Email" value={user.email}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="number" placeholder="Phone number"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Control placeholder="Your address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Control as="textarea" placeholder="Leave a comment here" />
  </Form.Group>
  
  <Button className="btn btn-primary" variant="primary" type="submit">Submit</Button>
</Form>


{/* <h2>Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" value={user.displayName}/>
      <input {...register("email", { required: true, maxLength: 20 })} placeholder="name" value={user.email}/>
      <input {...register("address", { required: true, maxLength: 20 })} placeholder="Address"/>
      <input type="number" {...register("phone")} placeholder="Phone number"/>
      <textarea {...register("description")} placeholder="description"/>
      <input type="submit" />
    </form> */}
            </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Booking;