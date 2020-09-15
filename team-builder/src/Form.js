import React, { useState } from 'react' //Step 1: bring in the state hook
import { render } from 'react-dom'

export default function TeamForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
        // console.log(evt.target.text);
    }
      
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    return (
        <form onSubmit = {onSubmit}>
            <h1>Team Form</h1>
            <label>Name: 
                <input 
                    type = 'text'
                    name = 'name'
                    onChange = {onChange}
                    value = {values.name}
                    placeholder = 'type a name'
                />
            </label>

            <label>Email: 
                <input 
                    type = 'text'
                    name = 'email'
                    onChange = {onChange}
                    value = {values.email}
                    placeholder = 'enter your email'
                />
            </label>

            <label>Role: 
                <select name = 'role' value = {values.role} onChange = {onChange}>
                    <option value = ''>-- select role --</option>
                    <option value = 'Frontend Engineer'>Frontend Engineer</option>
                    <option value = 'Backend Engineer'>Backend Engineer</option>
                    <option value = 'Designer'>Designer</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}