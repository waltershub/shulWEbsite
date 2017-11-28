import React from 'react';

import Slide from 'react-slick';

const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  centerPadding: true,


};

const Slideshow = props => (

  <Slide className="container" {...settings} >
    {props.images.map((image, i) => (<img key={image} src={image} alt="http://placekitten.com/g/400/200" />))}
  </Slide>

);

export default Slideshow;
