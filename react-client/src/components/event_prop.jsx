import React from 'react';
import Columns from 'react-columns';
// const right = {
// text-align:'left'
// };


const EventProp = props => (
  <div>
    <Columns columns={2}>
      <text className="left">{props.prop}</text>
      <text className="right">{props.info}</text>
    </Columns>
  </div>
);

export default EventProp;
