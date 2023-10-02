import { useState } from 'react'

const Listas = () => {
  const [list, setList] = useState(['Rick',
    'Morty',
    'Jerry',
    'Beth',
    'Summer',
    'Mr. Meeseeks',
    'Birdperson',
    'Squanchy',
    'Tammy'])

  const insertItem = () => {
    setList((prevList) => {
      const copy = [...prevList]
      copy.push(`New element ${copy.length}`)
      // const coyp2 = [...prevList, `New element ${copy.length}`]
      return copy
    })
  }

  const filterList = () => {
    setList((prevList) => {
      return prevList.filter(item => item.includes('y'))
    })
  }

  const removeThird = () => {
    setList((prevList) => {
      const copy = [...prevList]
      copy.splice(2, 1)
    })
  }
  return (
    <div>
      <button onClick={() => insertItem()}>Agregar elemento</button>
      <button onClick={() => filterList()}>Filtrar lista</button>
      <button onClick={() => removeThird()}>Borrar tercer elemento</button>
      <ul>
        {list.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Listas
