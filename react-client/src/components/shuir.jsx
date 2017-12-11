import React from 'react';
import { Button } from 'react-bootstrap';

const Shuir = props => (
  <div className="shuir">
    <h2>{props.shuir.name}</h2>
    <Button bsStyle="primary" href={props.shuir.src} download={`${props.shuir.name}.wav`}>
      Download
    </Button>
  </div>
);

export default Shuir;
