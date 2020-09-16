import React, { useState } from 'react';
import TeamForm from './Form'
import logo from './logo.svg';
import './App.css';

const teamList = [
  { name: 'Nicholas Fury', email: 'director@shield.gov.', role: 'Founder' },
  { name: 'Peter Parker', email: 'pbparker@midtownsct.edu.', role: 'Member' },
  { name: 'Tony Stark', email: 'tonystark@starkenterprises.com', role: 'Leader' },
  { name: 'Carol Danvers', email: 'cdanvers@shield.gov', role: 'Member' },
]

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

function App() {

  const [teamMembers, setTeamMembers] = useState(teamList)

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
    // debugger
  }

  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new friend object, trimming whitespace from username and email
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    setTeamMembers([...teamMembers, newMember])
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <div className = 'container display-team'>
        <h1>Avenger's Team Lineup</h1>
        <h3>Contact Information</h3>
        {
          teamMembers.map((member, idx) => {
            return (
              <div className = 'person-details' key={idx}>
                <h4>{member.name}: {member.role}</h4>
                <p>Email: {member.email}</p>
              </div>
            )
          })
        }
      </div>
      <div className = 'container'>
        <TeamForm className = 'team-form'
          values = {formValues}
          update = {updateForm}
          submit = {submitForm}/>
      </div>
    </div>
  );
}

export default App;
