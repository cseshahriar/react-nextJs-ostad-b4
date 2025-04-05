import React, { useState } from 'react'

import { getTodos, updateTodo } from '../api/todoApi';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'

import {
    useMutation,
    useQuery,
    useQueryClient
} from '@tanstack/react-query'

import toast from 'react-hot-toast';

import TodoForm from './TodoForm';
import Pagination from './Pagination';

const limit = 5;

const TodoList = () => {
    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [newTitle, setNewTitle] = useState('');

    const { data, isPending} = useQuery({
        queryKey: ["todos", page],
        queryFn: () => getTodos(page),
    });

    console.log('data ', data);

    const updateMutation = useMutation({
        mutationFn: (todo) => updateTodo(todo),
        onSuccess: () => {
            toast.success('Todo updated successfully');
            queryClient.invalidateQueries('todos'); // ✅ This will now trigger a re-fetch
            setEditingTodoId(null);
        },
        onError: (error) => {
            toast.error(`Error updating todo: ${error.message}`);
        },
    });

    if (isPending) return <div className="text-center">Loading...</div>;

    return (
        <div className='min-h-screen bg-gray-100 py-8'>
            <div className='max-4-4xl mx-auto px-4'>
                <TodoForm/>
                <h1 className='text-2xl font-bold text-center'>Todo List</h1>
                <table className="w-full text-sm text-left rtl:text-right text-white">
                    <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th  className="px-6 py-3">ID</th>
                            <th  className="px-6 py-3">Title</th>
                            <th  className="px-6 py-3">Status</th>
                            <th  className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="text-gray-700 text-sm divide-y divide-gray-200">
                        {data?.todos.map((todo) => (
                        <tr className="hover:bg-gray-50 transition" key={todo.id}>
                            <td className="px-6 py-4">{todo.id}</td>
                            <td className="px-6 py-4">
                                {
                                    editingTodoId === todo.id ? (
                                        <input
                                            onChange={(e) => setNewTitle(e.target.value)}
                                            onBlur={
                                                () => {
                                                    updateMutation.mutate({
                                                        ...todo,
                                                        todo: newTitle,
                                                    })
                                                    setNewTitle('')
                                                    setEditingTodoId(null)
                                                }
                                            }
                                            name='todo'
                                            autoFocus
                                            required
                                            type="text"
                                            value={todo.todo}
                                            className='flex-1 border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-blue-500'
                                            placeholder='Add a new todo'
                                        />
                                    ) : (
                                        <span className={`font-medium ${todo.completed ? 'line-through' : ''}`}>
                                            {todo.todo}
                                        </span>
                                    )
                                }
                            </td>
                            <td className="px-6 py-4">
                                {todo.completed ? 'Completed' : 'Pending'}
                            </td>
                                <td className="px-6 py-4">
                                <button className="text-blue-500 mr-4"
                                onClick={() => setEditingTodoId(todo.id)}
                                >
                                    <PencilIcon className="w-4 h-4 inline-block mr-1" />
                                </button>
                                <button className="text-red-500">
                                    <TrashIcon className="w-4 h-4 inline-block mr-1" />
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <Pagination
                currentPage={page}
                totalItems={data?.total || 0}
                onPageChange={setPage}
                itemsPerPage={limit}
            />

        </div>
    )
}

export default TodoList