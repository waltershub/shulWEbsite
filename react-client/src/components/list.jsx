import React from 'react';
import Shuir from './shuir.jsx';


const List = (props) => (
  <div>
    <h4> Shuirim </h4>
    {props.shuirim.map((shuir)=>(<Shuir  key={shuir.url} shuir={shuir}/>))}
  </div>
);

export default List;
