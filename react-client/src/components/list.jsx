import React from 'react';
import Shuir from './shuir.jsx';
import Audio from 'react-audioplayer';
import Columns from 'react-columns';

const List = props => (
  <center>
    <div className="player">
      <Audio
        width={600}
        height={400}
        playlist={props.shuirim}
        fullPlayer
      />
      <h4> Shuirim </h4>
      <Columns >
        {props.shuirim.map(shuir => (<Shuir key={shuir.url} shuir={shuir} />))}
      </Columns>
    </div>
  </center>
);

export default List;
