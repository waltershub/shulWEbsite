import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './components/list.jsx';
import Zmanim from './components/zmanim.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuirim: [],
      zmanim: [],
    };

    this.getShuirim = this.getShuirim.bind(this);
    this.getZmanim = this.getZmanim.bind(this);
    this.getShuirim();
    this.getZmanim();
  }

  componentDidMount() {

  }

  getShuirim() {
    axios.get('shuirim')
      .then((response) => {
        console.log(response.data.Items);
        this.setState({ shuirim: response.data.Items });
      });
  }

  getZmanim() {
    axios.get('zmanim')
      .then((response) => {
        console.log(response.data);
        this.setState({ zmanim: response.data });
      });
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Cong Sharay Shamyim
          </h1>
          <div>
            <center>
              <Zmanim zmanim={this.state.zmanim} />
            </center>
          </div>
          <List shuirim={this.state.shuirim} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
