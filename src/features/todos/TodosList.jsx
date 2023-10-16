import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoToggled, todoDeleted, getItemEntities, getTodos } from './todosSlice'

function TodosList() {
  const items = useSelector(getItemEntities)
  const dispatch = useDispatch()

  function handleToggle(id) {
    dispatch(todoToggled(id))
  }

  function handleRemove(id) {
    dispatch(todoDeleted(id))
  } 

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  return (
    <ul>
      {items.map(i => <li key={i.id}>
        <p>{i.author} - {i.title}</p>
        <button onClick={() => handleToggle(i.id)}>Toggle</button>
        <button onClick={() => handleRemove(i.id)}>Delete</button>
      </li>)}
    </ul>
  )

}

export default TodosList