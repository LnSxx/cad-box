import './css/Box.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Renderer from './Renderer';

function Box(props) {
    return (
      <Renderer data={props.box}/>
    );

}

export default Box;