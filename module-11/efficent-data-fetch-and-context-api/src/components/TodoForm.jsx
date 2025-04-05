import React, {useState} from 'react'
import { useMutation } from '@tanstack/react-query';
import { createTodo } from '../api/todoApi'; // Adjust the import path as necessary
import toast from 'react-hot-toast';

const TodoForm = () => {
    const [title, setTitle] = useState("");

    const createMutation = useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            console.log('Mutation successful! Resetting title...');
            toast.success('Todo created successfully');
            setTitle("");
        },
        onError: () => {
            console.log('Mutation failed!');
            toast.error('Error creating todo');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default page reload
        if (title.trim()) {
            createMutation.mutate({ todo: title, completed: false });
        } else {
            toast.error('Please enter a todo');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-4' noValidate>
            <div className='flex gap-2'>
                <input
                    required
                    name='todo'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='flex-1 border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-blue-500'
                    placeholder='Add a new todo'
                />
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer'>Add Todo</button>
            </div>
        </form>
    )
}

export default TodoForm