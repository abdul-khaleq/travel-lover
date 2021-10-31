import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div id="home">
            <Carousel variant="dark">
  <Carousel.Item>
    <img height='600' className="d-block w-100" src="https://i.ibb.co/N9Rz4zq/woman-walking-kelingking-beach-nusa-penida-island-bali-indonesia-335224-337.jpg" alt="First slide"/>
    <Carousel.Caption>
      <h5>Search your next Holiday  </h5>
      <p>Learn more about your destination, when not to travel, and other FAQs</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height='600' className="d-block w-100 h-80" src="https://i.ibb.co/SvFDBqF/wooden-bridge-koh-nangyuan-island-surat-thani-thailand-335224-1082.jpg"
      alt="Second slide"/>
    <Carousel.Caption>
      <h5>International Travel</h5>
      <p>ravel requirements to enter the United States are changing, starting November 8, 2021. More information is available here</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;