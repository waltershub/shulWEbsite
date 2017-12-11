import React from 'react';
import Columns from 'react-columns';
// const right = {
// text-align:'left'
// };


const Zman = props => (
  <div>
    <Columns columns={2}>
      <text className="left">{props.zman[0]}</text>
      <text className="right">{props.zman[1]}</text>
    </Columns>
  </div>
);

export default Zman;
