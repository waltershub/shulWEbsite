import React from 'react';
import Shuir from './shuir.jsx';
import Audio from 'react-audioplayer';
import Columns from 'react-columns';
import ReactDOM from 'react-dom';


class List extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.shuirimprops.stopPlaying();
  }
  render() {
    return (
      <center >
        <div className="player">
          <Audio
            width={600}
            height={400}
            playlist={this.props.shuirimprops.playlist}
            fullPlayer
            color="#212121"
            ref={this.props.shuirimprops.autoplayref}
          />
          <Columns coloums="2" className="shuirim">
            {this.props.shuirimprops.shuirim.map((shuir, i) => (<Shuir key={shuir.url} shuir={shuir} index={i} setplaying={this.props.shuirimprops.setplaying} />))}
          </Columns>
        </div>
      </center>);
  }
}

export default List;
