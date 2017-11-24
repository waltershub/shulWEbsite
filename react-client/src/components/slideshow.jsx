import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slide from 'react-slick';
//
// const settings = {
//   // dots: true,
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 1000,
//
// };

const Slideshow = props => (
  <center>
    <Carousel controls={false} indicators={false} interval={200}>
      {props.images.map((image, i) =>
        (<Carousel.Item key={i} animateIn animateOut>
          <img width={400} height={500} alt="900x500" src={image} />
        </Carousel.Item>))}
    </Carousel>
  </center>
);

export default Slideshow;
