import {startFetchBox, finishFetchBox, failFetchBox} from './actions'

export default function fetchBox() {
  return dispatch => {
    dispatch(startFetchBox());
    return fetch("http://localhost:3002", {
      method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 
    length: document.getElementById('length').value,
    width: document.getElementById('width').value,
    height: document.getElementById('height').value
   })
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        dispatch(finishFetchBox(result));
        return result;
      })
      .catch(error => dispatch(failFetchBox(error)));
  };
}