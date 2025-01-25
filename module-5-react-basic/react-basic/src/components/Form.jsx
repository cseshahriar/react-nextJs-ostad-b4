import React from 'react'
import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({name: "", email: ""}); // object
    const [keyLog, setKeyLog] = useState(""); // object

    const handleChange = (e) => {
        // handle input change logic
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleKeyUp = (e) => {
        setKeyLog(`Key Up: ${e.key}`)
    }

    const handleKeyDown = (e) => {
        setKeyLog(`Key Up: ${e.key}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("form submitted")
    }

    return (
        <form onSubmit={handleSubmit} className='m-2 p-2'>
            <div>
                <input
                    className='p-4 border-black border-2 m-2'
                    type="text"
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    onKeyDown={handleKeyDown}
                />
                 <input
                    className='p-4 border-black border-2 m-2'
                    type="email"
                    placeholder='email'
                    value={formData.email}
                    onChange={handleChange}
                    onKeyUp={handleKeyUp}
                    onKeyDown={handleKeyDown}
                />
                <button type='submit' className='p-2 text-white bg-black rounded-lg'>Submit</button>
            </div>
            <p>{keyLog} - {formData.name} {formData.email}</p>
        </form>
    )
}

export default Form