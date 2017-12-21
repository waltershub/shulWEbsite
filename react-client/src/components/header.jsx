import React from 'react';
import Slideshow from './slideshow.jsx';
import Donate from './donate.jsx';
import { PageHeader, Breadcrumb, Tab, Tabs } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const Home = props => (
  <center>
    <Donate />
    <div className="header">
      <span className="title shadow-box ">
          KHAL SHAR HASHAMYIM
      </span>
      <small>
        <Breadcrumb >
          <Breadcrumb.Item className="shadow-box"componentClass="spann">
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="shadow-box" componentClass="spann">
            <Link to="/events">Events</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="shadow-box" componentClass="spann">
            <Link to="/simchas">Simchas</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item className="shadow-box" componentClass="spann">
            <Link to="/List">Shuirim</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </small>
    </div>
  </center>
);

export default Home;
