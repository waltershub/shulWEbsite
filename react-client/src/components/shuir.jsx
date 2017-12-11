import React from 'react';
import { Button } from 'react-bootstrap';
import Columns from 'react-columns';

const Shuir = props => (
  <div className="shuir">
    <h4 >{props.shuir.name}</h4>
    <Columns>
      <Button className="left" bsStyle="primary" href={props.shuir.src} download={`${props.shuir.name}.wav`}>
      Download
      </Button>
      <Button className="right" bsStyle="success" href={props.shuir.src} download={`${props.shuir.name}.wav`}>
      play
      </Button>
    </Columns>
  </div>
);

export default Shuir;
