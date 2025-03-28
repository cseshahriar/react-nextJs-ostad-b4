import React, { useState } from 'react'

const ListView = () => {
    const [items, setItems] = useState(
        [
            {id: 1, name: 'Item One', isEditing: false},
            {id: 2, name: 'Item Two', isEditing: false},
            {id: 3, name: 'Item Three', isEditing: false},
            {id: 4, name: 'Item Four', isEditing: false},
            {id: 5, name: 'Item Five', isEditing: false},
        ]
    );

    const handleSave = (id, newName) => {
        setItems(
            items.map((item) =>
                item.id === id ? {...item, name: newName, isEditing: false} : item
            )
        )
    }

    const handleEdit = (id) => {
        setItems(
            items.map(
                (item) =>
                    item.id === id ? {...item, isEditing: true} : item
        ));
    }
    const handleCancel = (id) => {
        setItems(
            items.map(
                (item) =>
                    item.id === id ? {...item, isEditing: false} : item
        ));
    }

    const handleDelete = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    }

  return (
    <div className='mt-5'>
        <h1 className='font-bold text-xl'>List View with Action</h1>
        <div className='max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg'>
            <ul className='divide-y divide-gray-500'>
                {items.map((item ) => (
                    <li key={item.id} className='py-3 px-4 m-2 hover:bg-gray-100 rounded-lg shadow-lg transition flex items-center justify-between'>
                            {item.isEditing ? (
                                <input
                                    type='text'
                                    defaultValue={item.name}
                                    onChange={(e) => (item.name = e.target.value) }
                                    className='border px-2 w-full rounded focus:outline-none focus:ring-2 focus-within:ring-blue-500'
                                />
                            ) : (
                                <spa>{item.name}</spa>
                            )}
                            <div className='flex gap-2'>
                                {item.isEditing ? (
                                    <>
                                        <button className='bg-green-500 text-white px-2 py-1 rounded' onClick={() => handleSave(item.id, item.name)}>Save</button>
                                        <button className='bg-blue-500 text-white px-2 py-1 rounded' onClick={() => handleCancel(item.id)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button className='bg-green-500 text-white px-2 py-1 rounded' onClick={() => handleEdit(item.id)}>Edit</button>
                                        <button className='bg-red-500 text-white px-2 py-1 rounded' onClick={() => handleDelete(item.id)}>Delete</button>
                                    </>
                                )}
                            </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ListView