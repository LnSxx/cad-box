import React from "react";
import './css/BoxParamsInput.css'

function BoxParamsInput({fetchBox}) { 
    function getLength() {
      document.getElementById('lt').innerHTML = document.getElementById('length').value
    }
    function getHeight() {
      document.getElementById('ht').innerHTML = document.getElementById('height').value
    }
    function getWidth() {
      document.getElementById('wt').innerHTML = document.getElementById('width').value
    }
    
    return (
        <div className='boxInput'>
        <form>
            <label htmlFor='length' className='inputTitle' id='lt'>50</label>
              <input type='range' id='length' name='length' min='10' max='70' step='1' onInput={fetchBox} onChange={getLength}></input>
            <label htmlFor='length' className='inputLabel'>Length</label>
            <label htmlFor='width' className='inputTitle' id='wt'>50</label>
              <input type='range' id='width' name='width' min='10' max='70' step='1' onInput={fetchBox} onChange={getWidth}></input>
            <label htmlFor='width' className='inputLabel'>Width</label>
            <label htmlFor='height' className='inputTitle' id='ht'>50</label>
              <input type='range' id='height' name='height' min='10' max='70' step='1' onInput={fetchBox} onChange={getHeight}></input>
            <label htmlFor='height' className='inputLabel'>Height</label>
        </form>
        </div>
    )
}

export default BoxParamsInput