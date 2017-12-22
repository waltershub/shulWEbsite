import React from 'react';
import Columns from 'react-columns';
// const right = {
// text-align:'left'
// };


const Zman = props => (
  <div className={`shadow-box ${props.className}`}>
    <Columns columns={2}>
      <text className={`left ${props.className}text`}>{props.zman[0]}</text>
      <text className={`right ${props.className}text`}>{props.zman[1]}</text>
    </Columns>
  </div>
);

export default Zman;
