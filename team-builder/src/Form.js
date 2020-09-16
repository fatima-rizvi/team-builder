import React, { useState } from 'react' 
import { render } from 'react-dom'

export default function TeamForm(props) {
    const { values, update, submit, 
        // memberToEdit, edit
     } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
        console.log(evt);
        console.log(evt.target);
    }
      
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      } 

    return (
        <div>
            <h1>Team Form</h1>
            <form className = 'team-form' onSubmit = {onSubmit}>
                <label>Name: 
                    <input 
                        type = 'text'
                        name = 'name'
                        onChange = {onChange}
                        value = {values.name}
                        placeholder = 'enter name'
                    />
                </label>

                <label>Email: 
                    <input 
                        type = 'text'
                        name = 'email'
                        onChange = {onChange}
                        value = {values.email}
                        placeholder = 'enter email'
                    />
                </label>

                <label>Alias: 
                    <input 
                        type = 'text'
                        name = 'alias'
                        onChange = {onChange}
                        value = {values.alias}
                        placeholder = 'enter alias'
                    />
                </label>

                <label>Role: 
                    <select name = 'role' value = {values.role} onChange = {onChange}>
                        <option value = ''>-- select role --</option>
                        <option value = 'Founder'>Founder</option>
                        <option value = 'Leader'>Leader</option>
                        <option value = 'Member'>Member</option>
                        <option value = 'Recruit'>Recruit</option>
                    </select>
                </label>
                <button disabled={!values.name || !values.email || !values.role || !values.alias}>Submit</button>
            </form>
        </div>
    )
}