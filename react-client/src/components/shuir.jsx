import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Shuir = props => (
  <div>
    <h4>{props.shuir.name}</h4>
    <ReactAudioPlayer
      src={props.shuir.src}
      controls
    />
  </div>
);

export default Shuir;
