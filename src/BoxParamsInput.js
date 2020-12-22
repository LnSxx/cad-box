import React from "react";
import './css/BoxParamsInput.css'

function BoxParamsInput({fetchBox}) { 
    return (
        <div className='boxInput'>
        <form>
            <input type='range' id='length' name='length' min='10' max='70' step='1' onInput={fetchBox}></input>
            <label htmlFor='length'>Length</label>
            <input type='range' id='width' name='width' min='10' max='70' step='1' onInput={fetchBox}></input>
            <label htmlFor='length'>Width</label>
            <input type='range' id='height' name='height' min='10' max='70' step='1' onInput={fetchBox}></input>
            <label htmlFor='length'>Height</label>
        </form>
        </div>
    )
}

export default BoxParamsInput