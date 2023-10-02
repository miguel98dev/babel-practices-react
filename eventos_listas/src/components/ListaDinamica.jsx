import { useState } from 'react'

const ListaDinamica = () => {
  const [list, setList] = useState([{ id: 1, name: 'Rick' }, { id: 2, name: 'Jhon' }, { id: 3, name: 'Alice' }])

  const deleteElement = (id) => {
    const newList = list.filter((element) => element.id !== id)
    setList(newList)
  }

  const addElement = () => {
    const newElement = {
      id: Date.now() * Math.random(),
      name: 'Nuevo elemento'
    }
    setList([...list, newElement])
  }
  return (
    <div>
      <h2>LISTA DINÁMICA</h2>
      <ul>
        {list.map((element) => (
          <li className='list' key={element.id}>
            {element.name}
            <button onClick={() => deleteElement(element.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={addElement}>Añadir</button>
    </div>
  )
}

export default ListaDinamica

/* Diseñar un componente "ListaDinámica" en el que definiremos un estado. Este estado almacenará una lista de objetos que tendrán al menos dos propiedades: "id" (número) y "nombre" (cadena de texto). Inicialmente la lista tendrá 3 objetos de muestra predefinidos.

Se mostrará por JSX una lista (ul/ol) y por cada elemento del estado se mostrará un elemento (li). Cada elemento mostrará al menos su nombre y un botón "Eliminar", que al pulsarlo modificará el estado para eliminar el elemento seleccionado.
Además, al final de la lista se mostrará un botón "Añadir" que modificará el estado para agregar un elemento con un nombre predefinido y un id aleatorio generado de esta forma: Date.now() * Math.random() */
