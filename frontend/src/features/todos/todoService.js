import axios from 'axios'

const API_URL = '/api/todos/'

// Create new todo
const createTodo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, todoData, config)

  return response.data
}

// Get user todos
const getTodos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user todo
const deleteTodo = async (todoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + todoId, config)

  return response.data
}

const todoService = {
  createTodo: createTodo,
  getTodos: getTodos,
  deleteTodo: deleteTodo,
}

export default todoService