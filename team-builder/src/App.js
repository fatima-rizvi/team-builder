import React, { useState } from 'react';
import TeamForm from './Form'
import logo from './logo.svg';
import './App.css';

const teamList = [
  { name: 'Peter', email: 'peter@lambda.com', role: 'frontend engineer' },
  { name: 'Tony', email: 'tony@lambda.com', role: 'backend engineer' },
  { name: 'Carol', email: 'carol@lambda.com', role: 'designer' },
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {
        teamMembers.map((member, idx) => {
          return <div key={idx}>{member.name} is a {member.role}. Their email is {member.email}</div>
        })
      }
      <div>
        <TeamForm 
          values = {formValues}
          update = {updateForm}
          submit = {submitForm}/>
      </div>
    </div>
  );
}

export default App;
