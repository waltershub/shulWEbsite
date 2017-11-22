import React from 'react';
import Slideshow from './slideshow.jsx';

const Home = props => (
  <div>
    <h4>Cong Shar HaShamyim</h4>
    <Slideshow images={props.images} />
  </div>
);

export default Home;
