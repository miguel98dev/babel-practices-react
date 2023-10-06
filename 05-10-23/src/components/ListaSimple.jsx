import { useReducer } from 'react'
import listReducer, { initialState } from '../../reducers/Reducer'

function ListaSimple ({ props }) {
  const [state, dispatch] = useReducer(listReducer, initialState)

  function handleAddItem () {
    dispatch({
      type: 'list/addItem',
      payload: {
        name: 'no se que',
        conditions: true,
        city: 'Barcelona',
        id: 5
      }
    })
  }

  function handleSelectItem (item) {
    dispatch({
      type: 'list/selectItem',
      payload: { id: item.id }
    })
  }

  return (
    <div>
      <h1>List reducer</h1>
      <button onClick={handleAddItem}>Agregar nuevo</button>
      <ul>
        {state.list.map((item) => (
          <li
            key={item.id}
            onClick={() => handleSelectItem(item)}
          >
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaSimple
