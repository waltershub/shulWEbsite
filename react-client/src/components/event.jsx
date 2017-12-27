import React from 'react';
import Columns from 'react-columns';
import EventProp from './event_prop.jsx';

const Events = props => (
  <div className="shadow-box event">
    <div className="zman-title">{props.event.event}</div>
    <EventProp prop="Date" info={props.event.date} />
    <EventProp prop="time" info={props.event.time} />
    <EventProp prop="location" info={props.event.location} />
  </div>
);

export default Events;
