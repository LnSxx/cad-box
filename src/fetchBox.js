import {startFetchBox, finishFetchBox, failFetchBox} from './actions'

export default function fetchBox(length, width, height) {
  return dispatch => {
    dispatch(startFetchBox());
    return fetch("http://localhost:3002", {
      method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 
    length: length,
    width: width,
    height: height
   })
    })
      .then(res => res.json())
      .then(result => {
        dispatch(finishFetchBox(result));
        return result;
      })
      .catch(error => dispatch(failFetchBox(error)));
  };
}