import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    // Loading Data 
    useEffect(() => {
        fetch('https://thawing-peak-73051.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div id="services">
            {/* render services from server side */}
            <Container className='py-5'>
                <h1>Our services</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service service={service}></Service>)
                }
                </Row>
            </Container>
        </div>
    );
};

export default Services;