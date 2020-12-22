import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import BoxParamsInput from './BoxParamsInput';
import Box from './Box';
import {connect} from 'react-redux'
import fetchBox from './fetchBox'

function App(props) {
    let storeState = props
    return (
      <>
      <BoxParamsInput fetchBox={storeState.fetchBox}/>
      <Box box={storeState}/>
      </>
    );
  }

const mapStateToProps = (store) => {
  return {
    box: store.actionNames.box
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBox: () => dispatch(fetchBox())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
