import React, { useEffect, useState } from 'react';
import TeamForm from './Form'
import logo from './logo.svg';
import './App.css';

const teamList = [
  { name: 'Nicholas Fury', email: 'director@shield.gov', role: 'Founder', alias: 'Scorpio' },
  { name: 'Peter Parker', email: 'pbparker@midtownsct.edu', role: 'Member', alias: 'Spiderman' },
  { name: 'Tony Stark', email: 'tonystark@starkenterprises.com', role: 'Leader', alias: 'Iron Man' },
  { name: 'Carol Danvers', email: 'cdanvers@shield.gov', role: 'Member', alias: 'Captain Marvel' },
]

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  alias: '',
  ///// DROPDOWN /////
  role: '',
}

function App() {

  const [teamMembers, setTeamMembers] = useState(teamList)

  const [formValues, setFormValues] = useState(initialFormValues)

  const [memberToEdit, setMemberToEdit] = useState({})

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
    // debugger
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      alias: formValues.alias.trim(),
      role: formValues.role,
    }

    setTeamMembers([...teamMembers, newMember])
    setFormValues(initialFormValues)
  }

  const edit = useEffect((member) => {
    setFormValues(member)
  },[memberToEdit])

  return (
    <div className="App">
      <div className = 'container display-team'>
        <div className = 'team-header'>
          <h1>Avenger's Team Lineup</h1>
          <h3>Contact Information</h3>
        </div>
        <div className = 'person-holder'>
          {
            teamMembers.map((member, idx) => {
              return (
                <div className = 'member' key={idx}>
                  <div className = 'person-main'>
                    <p><span className = 'bold-text'>{member.name}: </span>{member.role}</p>
                  </div>
                  <div className = 'person-details'>
                    <p><span className = 'bold-text'>Alias: </span>{member.alias}</p>
                    <p><span className = 'bold-text'>Email: </span>{member.email}</p>
                  </div>
                  <button onClick = {edit}>Edit</button>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className = 'container'>
        <TeamForm className = 'team-form'
          values = {formValues}
          update = {updateForm}
          submit = {submitForm}
          memberToEdit = {memberToEdit}
          edit = {edit}/>
      </div>
    </div>
  );
}

export default App;
