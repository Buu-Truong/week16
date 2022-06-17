import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export default class CarouselComponent extends React.Component {
  render() {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="GrandCanyon.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Arizona</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Best-places-to-explore-in-Arizona.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Arizona</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="HavasuFall.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Arizona</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}



