import React from 'react';
import Slideshow from './slideshow.jsx';
import Donate from './donate.jsx';

const Home = props => (
  <div className="main-body">
    <Donate />
    <Slideshow className="slide" images={props.images} />
  </div>
);

export default Home;
