import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import teamMembers from '../teamMembers';


const NewMemberForm = ({addMember}) => {

    // console.log(props);
    

  const [formState, setFormState] = useState({
      id: '',
      name: '',
      email: '',
      position: ''
  })  

  const changeHandler = event => {
    //   console.log(event.target)
      setFormState({
          ...formState,
          [event.target.name]: event.target.value
      });

  };

  const formSubmitHandler = event => {
      event.preventDefault();

      addMember({
        ...formState,
        id: teamMembers.length + 1
      });

      setFormState({
          name: '',
          email: '',
          position: ''
      });

    //   console.log(formState);
  };


  return (
    <Form onSubmit={formSubmitHandler}>
      <FormGroup>
        <Label for="fullName">Full Name</Label>
        <Input 
            type="text" 
            name="name" 
            id="fullName" 
            placeholder="Full Name"
            value={formState.name} 
            onChange={changeHandler}
            />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="youremail@toons.com"
            value={formState.email}
            onChange={changeHandler}
            />
      </FormGroup>
      <FormGroup>
        <Label for="position">Position</Label>
        <Input 
            type="text" 
            name="position" 
            id="position" 
            placeholder="Team Position" 
            value={formState.position}
            onChange={changeHandler}
            />
      </FormGroup>
      <Button>Add New Member</Button>
    </Form>
  )}

  export default NewMemberForm;