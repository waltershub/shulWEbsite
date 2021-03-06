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
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Events from './components/events.jsx';
import Simchas from './components/simchas.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuirim: [],
      zmanim: [],
      schedule: [],
      shulImages: [],
      events: [],
      simchas: [],
      playlist: '',
      autoplay: true,
    };

    this.getShuirim = this.getShuirim.bind(this);
    this.getZmanim = this.getZmanim.bind(this);
    this.getShulImages = this.getShulImages.bind(this);
    this.getShulSchedule = this.getShulSchedule.bind(this);
    this.setplaying = this.setplaying.bind(this);
    this.autoplayrefset = this.autoplayrefset.bind(this);
    this.stopPlaying = this.stopPlaying.bind(this);
    this.getShuirim();
    this.getZmanim();
    this.getShulSchedule();
  }

  componentDidMount() {
    this.getShulImages();
  }

  getShuirim() {
    axios.get('shuirim')
      .then((response) => {
      //  this.setState({ shuirim: response.data.Items });
        const playlist = [];
        response.data.Items.forEach((shuir) => {
          playlist.push({
            name: shuir.title.slice(0, shuir.title.length - 4),
            src: shuir.url,
            img: '/assets/images/slideshow/8.png',
          });
          // this.setState({ playlist: playlist[0] });
          this.setState({ shuirim: playlist });
        });
      });
  }

  setplaying(name) {
    console.log(name);

    axios.post('signedUrl', { shuir: name })
      .then((response) => {
        console.log(response.data);
        this.setState({ playlist: response.data }, () => {
          console.log(this.state.playlist);
          this.setState({ autoplay: true });
        });
      });
  }

  stopPlaying() {
    this.setState({ playlist: '' });
  }
  getZmanim() {
    axios.get('zmanim')
      .then((response) => {
        this.setState({ zmanim: response.data });
      });
  }

  getShulSchedule() {
    axios.get('shulSchedule')
      .then((response) => {
        this.setState({ schedule: response.data });
      });
  }

  getShulImages() {
    const path = '/assets/images/slideshow/';
    const images = [];
    for (let i = 1; i < 6; i++) {
      images.push(`${path + i}.JPG`);
    }
    this.setState({ shulImages: images });
  }
  autoplayrefset(el) {
    this.setState({ autoplayref: el });
  }
  render() {
    return (
      <Router>
        <div >
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} timeprops={{ zmanim: this.state.zmanim, schedule: this.state.schedule }} />
            )}
          />
          <Route
            path="/events"
            render={props => (
              <Events {...props} events={this.state.events} />
            )}
          />
          <Route
            path="/simchas"
            render={props => (
              <Simchas {...props} simchas={this.state.simcahs} />
            )}
          />
          <Route
            path="/List"
            render={props => (
              <List
                {...props}
                shuirimprops={{
                  playlist: this.state.playlist, shuirim: this.state.shuirim, setplaying: this.setplaying, playerref: this.state.autoplayref, stopPlaying: this.stopPlaying, autoplay: this.state.autoplay,
                }}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
