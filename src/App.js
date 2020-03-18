import React, { useState } from 'react';
import './App.css';
import MemberTable from './components/MemberTable';
import NewMemberForm from './components/Form'

function App() {

  const [formState, setFormState] = useState([])

  const addNewMember = newMember => {
    setFormState([...formState, newMember]);
    //Update the state.
  };

  return (
    <div className="App">
      <NewMemberForm addMember={addNewMember}/>
      {console.log(formState)}
      <MemberTable 
      formState={formState}
      />
    </div>
  );
}

export default App;
