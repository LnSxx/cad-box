import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BoxParamsInput from './BoxParamsInput';
import {connect} from 'react-redux'
import fetchBox from './fetchBox'
import Renderer from './Renderer';

function App({dispatch, dimensions, box, isFetching, error}) {
    return (
      <div className='App'>
      <BoxParamsInput dispatch={dispatch} fetchBox={fetchBox} dimensions={dimensions}/>
      {(isFetching === false && error === null)? <Renderer data={box} isFetching={isFetching} error={error}/> : null}
      </div>
    );
  }

const mapStateToProps = (store) => {

  return {
    box: store.box,
    dimensions: store.dimensions,
    isFetching: store.isFetching,
    error: store.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
