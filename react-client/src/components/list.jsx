import React from 'react';
import Shuir from './shuir.jsx';
import Audio from 'react-audioplayer';
import Columns from 'react-columns';

const List = props => (
  <center >
    <div className="player">
      <Audio
        width={600}
        height={400}
        playlist={props.shuirimprops.playlist}
        fullPlayer
        color="#212121"
        autoplay={props.shuirimprops.autoplay}
      />
      <Columns >
        {props.shuirimprops.shuirim.map((shuir, i) => (<Shuir key={shuir.url} shuir={shuir} index={i} setplaying={props.shuirimprops.setplaying} />))}
      </Columns>
    </div>
  </center>
);

export default List;
