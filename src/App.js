import React, { useState } from 'react';
import './App.css';

function App() {

  const [member, setMember] = useState('dog');





  return (
    <div className="App">
      {member}
    </div>
  );
}

export default App;
