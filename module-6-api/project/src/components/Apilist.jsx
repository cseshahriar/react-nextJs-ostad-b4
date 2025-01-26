import { useEffect, useState} from 'react'

const Apilist = () => {
    const [todos, setTodos] = useState(null);

    // component mount hoar pore call hoy
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setTodos(json))
    }, [])

    // useLayoutEffect call before render page

    return (
        <div>
            <h1>Fetch API</h1>
            <table style={{width: '100%', background: 'gray', textAlign: "center", marginTop: "16px"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos?.map((item, index) => (
                        <tr key={++index}>
                            <td>{index}</td>
                            <td>{item.title}</td>
                            <td>{item.completed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Apilist