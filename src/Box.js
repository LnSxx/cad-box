import './css/Box.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Renderer from './Renderer';

function Box() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const requestOptions = {
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
  };
    fetch("http://localhost:3002", requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setItems(result);
          setIsLoaded(true);
         
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div className='loadScreen'>Ошибка: {error.message}</div>;
  
  } else if (!isLoaded) {
    return <div className='loadScreen'></div>;
  } else {
    console.log(items)
    return (
      <Renderer data={items}/>
    );
  }
}

export default Box;
