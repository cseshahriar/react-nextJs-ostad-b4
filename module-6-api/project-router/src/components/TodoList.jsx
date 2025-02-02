import React, {useState} from 'react'

const TodoList = () => {
  const [todoList, setTodoItem] = useState([]);
  const [todoItem, setItem] = useState("");

  const addTodo = () => {
    setTodoItem([...todoList, todoItem]);
  }

  const clearTodo = () => {
    setTodoItem([]);
    setItem("");
  }

  const removeTodo = (todo) => {
    return () => {
      setTodoItem(todoList.filter((item) => item!== todo));
    }
  }

  return (
    <div>
        <h1>TodoList Implementation</h1>

        <label htmlFor='todoItem'>Todo Item</label>
        <input
            type="text"
            name='todoItem'
            id='todoItem'
            onChange={(e) => setItem(e.target.value)}
            placeholder='Write Todo'
            style={{marginLeft: '10px', padding: '6px', border: "1px solid #000"}}
        />
        <button onClick={addTodo} style={{marginRight: '10px'}}>Add</button>
        <button onClick={clearTodo}>Clear</button>

        {/** todo list */}
        <h2>Todo List</h2>
        {
            todoList.length > 0 ? (
                <ul style={{listStyle: 'none'}}>
                    {todoList.map((todo, index) => (
                        <li key={index}>{todo} <button onClick={removeTodo(todo)} style={{color: "red"}}>X</button></li>
                    ))}
                </ul>
            ) : (<p>No items here</p>)
        }
    </div>
  )
}

export default TodoList