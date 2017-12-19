import React from 'react';
import Shuir from './shuir.jsx';
import Audio from 'react-audioplayer';
import Columns from 'react-columns';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';

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
    axios.post('signedUrl', { shuir: name })
      .then((response) => {
        console.log(response.data);
        this.setState({ downloadUrl: response.data });
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
            {this.props.shuirimprops.shuirim.map((shuir, i) => (<Shuir key={shuir.url} url={this.state.downloadUrl} download={this.getDownload}shuir={shuir} index={i} setplaying={this.props.shuirimprops.setplaying} />))}
          </Columns>
        </div>
      </center>);
  }
}

export default List;
