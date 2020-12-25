import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BoxParamsInput from './BoxParamsInput';
import {connect} from 'react-redux'
import fetchBox from './fetchBox'
import Renderer from './Renderer';

function App({dispatch, dimensions, box}) {
    return (
      <>
      <BoxParamsInput dispatch={dispatch} fetchBox={fetchBox} dimensions={dimensions}/>
      <Renderer data={box} />
      </>
    );
  }

const mapStateToProps = (store) => {
  return {
    box: store.box,
    dimensions: store.dimensions
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
