import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [helloWorld, setHelloWorld] = useState({})

  useEffect(() => {
    fetch('/hello')
      .then(res => res.json()).then(data => {
        console.log('res:', data);
        setHelloWorld(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  
  return (
    <div className="App">
      <p>
        {helloWorld?.data}
      </p>
    </div>
  );
}

export default App;
