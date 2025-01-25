import React, { useState } from 'react'

const SimpleForm = () => {
    const [tableData, setTableData] = useState([]);
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
        }
    );

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setTableData([...tableData, formData]);
    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => (
            {...prevData, [name]: value }
        ));
        // setFormData({...formData, [name]: value });
    }

  return (
    <>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>Name </label>
                <input
                    type="text"
                    name='name'
                    id='name'
                    required
                    placeholder="Enter your name"
                    onChange={changeHandler}
                    value={formData.name}
                />
            </div>
            <div>
                <label>Email </label>
                <input
                    type="email"
                    name='email'
                    id='email'
                    required
                    placeholder="Enter an email"
                    onChange={changeHandler}
                    value={formData.email}
                />
            </div>

            <button type="submit" style={{padding: '10px', background: '#000', color: '#fff'}}>Submit</button>
        </form>

        <br/>
        <table style={{width: '100%', background: 'gray', textAlign: "center", marginTop: "16px"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {tableData && tableData.map((item, index) => (
                    <tr key={++index}>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default SimpleForm