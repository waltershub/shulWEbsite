import React from 'react';
import Slideshow from './slideshow.jsx';
import Columns from 'react-columns';

const Shachris = () => (
  <div className="zmanim">
    <h4 className="shadow-box zman-title"> Weekday Shachris</h4>
    <div className="shadow-box">
      <Columns columns={2}>
        <text className="left">Tues, Wed, Fri
        </text>
        <text className="right">6:30 AM</text>
      </Columns>
    </div>
    <div className="shadow-box">
      <Columns columns={2}>
        <text className="left">Mon, Thurs</text>
        <text className="right">6:25 AM</text>
      </Columns>
    </div>
    <div className="shadow-box">
      <Columns columns={2}>
        <text className="left">Rosh Chodesh</text>
        <text className="right">6:20 AM</text>
      </Columns>
    </div>
  </div>);

export default Shachris;
