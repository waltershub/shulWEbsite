import React from 'react';
import Shuir from './shuir.jsx';
import Audio from 'react-audioplayer';
import Columns from 'react-columns';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';
import axios from 'axios';
import uniqueId from 'lodash.uniqueid';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadUrl: '',
    };

    this.getDownload = this.getDownload.bind(this);
  }

  componentWillUnmount() {
    this.props.shuirimprops.stopPlaying();
  }

  getDownload(name) {
    this.setState({ downloadUrl: '' });
    axios.post('signedUrl', { shuir: name })
      .then((response) => {
        const link = document.createElement('a');
        link.download = `${name}.wav`;
        link.href = response.data;
        link.click();
      });
  }

  render() {
    return (
      <center >
        <img className="homepic shuirpic"src="/assets/images/slideshow/shuirim.png" alt="https://www.w3schools.com/colors/colors_picker.asp" />
        <div className="player">
          <ReactAudioPlayer
            src={this.props.shuirimprops.playlist}
            autoPlay
            controls
          />
          <Columns coloums="2" className="shuirim">
            {this.props.shuirimprops.shuirim.map((shuir, i) => (<Shuir key={shuir.id || uniqueId()} url={this.state.downloadUrl} download={this.getDownload}shuir={shuir} index={i} setplaying={this.props.shuirimprops.setplaying} />))}
          </Columns>
        </div>
      </center>);
  }
}

export default List;
