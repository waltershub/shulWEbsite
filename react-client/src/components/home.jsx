import React from 'react';
import Slideshow from './slideshow.jsx';

const Home = props => (
  <div className="home">
    <Slideshow className="slideshow" images={props.images} />
  </div>
);

export default Home;
