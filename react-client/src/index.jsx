import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { PageHeader, Breadcrumb, Tab, Tabs } from 'react-bootstrap';
import List from './components/list.jsx';
import Zmanim from './components/zmanim.jsx';
import Home from './components/home.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuirim: [],
      zmanim: [],
      shulImages: ['http://placekitten.com/g/400/200'],
      playlist: [],
    };

    this.getShuirim = this.getShuirim.bind(this);
    this.getZmanim = this.getZmanim.bind(this);
    this.getShulImages = this.getShulImages.bind(this);
    this.getShuirim();
    this.getZmanim();
  }

  componentDidMount() {
    this.getShulImages();
  }

  getShuirim() {
    axios.get('shuirim')
      .then((response) => {
        this.setState({ shuirim: response.data.Items });
        const playlist = [];
        response.data.Items.forEach((shuir) => {
          console.log(shuir);
          playlist.push({
            name: shuir.title.slice(0, shuir.title.length - 4),
            src: shuir.url,
            img: '/assets/images/slideshow/8.png',
          });
          this.setState({ playlist });
        });
      });
  }

  getZmanim() {
    axios.get('zmanim')
      .then((response) => {
        this.setState({ zmanim: response.data });
      });
  }

  getShulImages() {
    const path = '/assets/images/slideshow/';
    const images = [];
    for (let i = 1; i < 6; i++) {
      images.push(`${path + i}.JPG`);
    }
    console.log(images);
    this.setState({ shulImages: images });
  }

  render() {
    return (
      <Router>
        <div >
          <center>
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
                    <Link to="/zmanim">Zmanim</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item className="shadow-box" componentClass="spann">
                    <Link to="/List">Shuirim</Link>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </small>
            </div>
          </center>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} images={this.state.shulImages} />
            )}
          />
          <Route
            path="/zmanim"
            render={props => (
              <Zmanim {...props} zmanim={this.state.zmanim} />
            )}
          />
          <Route
            path="/List"
            render={props => (
              <List {...props} shuirim={this.state.playlist} />
            )}
          />
          <footer>
            ave m
          </footer>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
