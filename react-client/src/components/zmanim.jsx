import React from 'react';
import Zman from './zman.jsx';

const Zmanim = (props) => (
  <div>
    <h4>Zmanim</h4>
    {props.zmanim.map((zman , i)=>( <Zman key={i} zman={zman} />))}
  </div>
);

export default Zmanim;
