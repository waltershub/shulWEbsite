import React from 'react';
import Zman from './zman.jsx';

const Zmanim = props => (
  <div className="main-body">
    <h4 >Zmanim</h4>
    {props.timeprops.zmanim.map((zman, i) => (<Zman key={zman[1]} zman={zman} />))}
    <h4>Shabbas Schedule</h4>
  </div>
);

export default Zmanim;
