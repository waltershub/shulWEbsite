import React from 'react';

const Simchas = props => (
  <center>
    <div className="zmanim events">
      <h1 className="shadow-box event-title">
      Simchas
      </h1>
      {props.simchas && props.simchas.map(newevent => (<Event key={uniqueId()} event={newevent} />))}
    </div>
  </center>
);

export default Simchas;
