import React from "react";
import './css/BoxParamsInput.css'
import { ACTION_NAMES } from "./actions";
import {store} from './store/configureStore'


function BoxParamsInput({dispatch, fetchBox, dimensions}) { 
  
    function updateLength(event) {
      const length = Number(event.target.value)
      store.dispatch({
        type: ACTION_NAMES.UPDATE_LENGTH,
        value: length
      })
      dispatch(fetchBox(length, dimensions.width, dimensions.height))
    }

    function updateWidth(event) {
      const width = Number(event.target.value)
      store.dispatch({
        type: ACTION_NAMES.UPDATE_WIDTH,
        value: width
      })
      dispatch(fetchBox(dimensions.length, width, dimensions.height))
    }

    function updateHeight(event) {
      const height = Number(event.target.value)
      store.dispatch({
        type: ACTION_NAMES.UPDATE_HEIGHT,
        value: height
      })
      dispatch(fetchBox(dimensions.length, dimensions.width, height))
    }

    return (
        <div className='boxInput'>
        <form>
            <label htmlFor='length' className='inputTitle' id='lt'>{dimensions.length}</label>
              <input type='range' id='length' name='length' min='10' max='70' step='1'  onInput={updateLength}></input>
            <label htmlFor='length' className='inputLabel'>Length</label>
            <label htmlFor='width' className='inputTitle' id='wt'>{dimensions.width}</label>
              <input type='range' id='width' name='width' min='10' max='70' step='1'  onInput={updateWidth}></input>
            <label htmlFor='width' className='inputLabel'>Width</label>
            <label htmlFor='height' className='inputTitle' id='ht'>{dimensions.height}</label>
              <input type='range' id='height' name='height' min='10' max='70' step='1'  onInput={updateHeight}></input>
            <label htmlFor='height' className='inputLabel'>Height</label>
        </form>
        </div>
    )
}

export default BoxParamsInput