import React from 'react';
import { Button } from 'react-bootstrap';

const Shuir = props => (
  <div className="shadow-box">
    <h4>{props.shuir.name}</h4>
    <Button bsStyle="primary" href={props.shuir.src} download={`${props.shuir.name}.wav`}>
      Download
    </Button>
  </div>
);

export default Shuir;
