import React from 'react';
import Event from './event.jsx';
import uniqueId from 'lodash.uniqueid';

const Events = props => (
  <center>
    <div className=" zmanim events">
      <h1 className=" event-title shadow-box">
      Events
      </h1>
      <div>
        {props.events && props.events.map(newevent => (<Event key={uniqueId()} event={newevent} />))}
      </div>
    </div>
  </center>
);

export default Events;
