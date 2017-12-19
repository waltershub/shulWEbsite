import React from 'react';
import Slideshow from './slideshow.jsx';
import Columns from 'react-columns';
import Zman from './zman.jsx';
import Donate from './donate.jsx';

const Home = props => (
  <div className="main-body ">
    <Columns columns={2}>
      <div className="zmanim">
        <h4 className="shadow-box zman-title">Zmanim</h4>
        {props.timeprops.zmanim.map((zman, i) => (<Zman key={zman[1]} zman={zman} />))}
      </div>
      <div>
        <div className="zmanim">
          <h4 className="shadow-box zman-title">Shabbas Schedule</h4>
          {props.timeprops.schedule.map((zman, i) => (<Zman key={zman[1]} zman={zman} />))}
        </div>
        <div className="zmanim">
          <h4 className="shadow-box zman-title">Shuirim</h4>
          <div className="shadow-box">
            <Columns columns={2}>
              <text className="left">Tuesdays  <br />
                Halacha
              </text>
              <text className="right">9:00 pm</text>
            </Columns>
          </div>
          <div className="shadow-box">
            <Columns columns={2}>
              <text className="left">Thursdays<br />Beitzei</text>
              <text className="right">9:00 pm</text>
            </Columns>
          </div>
        </div>
      </div>
    </Columns>
  </div>
);

export default Home;

// <div className="homeimg">
//   <img className="homepic"src="/assets/images/slideshow/shul.png" alt="https://www.w3schools.com/colors/colors_picker.asp" />
// </div>
