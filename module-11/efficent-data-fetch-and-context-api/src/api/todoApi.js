import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTodos = async (page=1, limit=5) => {
  try {
    const response = await api.get(`/todos?_page=${page}`);
    return {
        todos: response.data.data,
        total: parseInt(response.data.items || 0)
    };
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await api.post('/todos', todo);
    return response.data;
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
}

export const updateTodo = async (todo) => {
  try {
    const response = await api.put(`/todos/${todo.id}`, todo);
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
}

export const deleteTodo = async (id) => {
  try {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
}

export const fetchTodoById = async (id) => {
  try {
    const response = await api.get(`/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todo by ID:', error);
    throw error;
  }
}