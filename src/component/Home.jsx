
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Product from  './Product'

function Home() {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block"
          src="/assets/carousal1.png"
          alt="First slide"
          height="600px"
          width="100%"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block"
          src="/assets/carousal2.png"
          alt="Second slide"
          height="600px"
          width="100%"

        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/assets/carousal3.png"
          alt="Third slide"
          height="600px"
          width="100%"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/assets/carousal4.png"
          alt="Third slide"
          height="600px"
          width="100%"
        />
      </Carousel.Item>
    </Carousel>
  <Product />
  </div>

  );
}

export default Home;