import React from 'react';
import Zman from './zman.jsx';
import Columns from 'react-columns';


const Zmanim = props => (
  <div className="main-body">
    <Columns columns="2">
      <div className="zmanim">
        <h4 >Zmanim</h4>
        {props.timeprops.zmanim.map((zman, i) => (<Zman className={`${i === 0 ? 'Date' : ''}`} key={zman[1]} zman={zman} />))}
      </div>
      <div className="zmanim">
        <h4>Shabbas Schedule</h4>
        {props.timeprops.schedule.map((zman, i) => (<Zman key={zman[1]} zman={zman} />))}
      </div>
    </Columns>
  </div>
);

export default Zmanim;
