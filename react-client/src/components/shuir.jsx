import React from 'react';
import { Button } from 'react-bootstrap';
import Columns from 'react-columns';

const Shuir = props => (
  <div className="shuir">
    <h4 >{props.shuir.name}</h4>
    <Columns>
      <Button bsSize="large" className="left download" href={props.shuir.src} download={`${props.shuir.name}.wav`}>
      Download
      </Button>
      <Button bsSize="large" className="right play " onClick={() => (props.setplaying(props.shuir.name))}>
      play
      </Button>
    </Columns>
  </div>
);

export default Shuir;
