import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Shuir = props => (
  <div>
    <h4>{props.shuir.title.slice(0, props.shuir.title.length - 4)}</h4>
    <ReactAudioPlayer
      src={props.shuir.url}
      controls
    />
  </div>
);

export default Shuir;
