import { useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todos/todoSlice'

function TodoItem({ todo }) {
  const dispatch = useDispatch()

  console.log("TODO")
  console.log(todo)

  return (
    <div className='goal'>
      <div>{new Date(todo.createdAt).toLocaleString('en-US')}</div>
      <h2>{todo.text}</h2>
      <button onClick={() => dispatch(deleteTodo(todo._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default TodoItem