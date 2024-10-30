import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [helloWorld, setHelloWorld] = useState('')

  useEffect(() => {
    fetch('/')
    .then(res => {
      res.json()
    }).then(data => {
      console.log('res', data)
      setHelloWorld(data)
    })
  })
  
  return (
    <div className="App">
      {/* <p style={{color: 'red'}}>{helloWorld?.data}</p> */}
      {helloWorld}
    </div>
  );
}

export default App;
