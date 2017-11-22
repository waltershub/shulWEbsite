import React from 'react';

import Slide from 'react-slick';

const settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,

};

const Slideshow = props => (
  <Slide{...settings}>
    {props.images.map((image, i) => (<img key={i} src={image} alt="http://placekitten.com/g/400/200" />))}
  </Slide>
);

export default Slideshow;
