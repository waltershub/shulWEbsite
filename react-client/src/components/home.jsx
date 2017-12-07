import React from 'react';
import Slideshow from './slideshow.jsx';

const Home = props => (
  <div className="main-body">
    <Slideshow className="slide" images={props.images} />
  </div>
);

export default Home;
