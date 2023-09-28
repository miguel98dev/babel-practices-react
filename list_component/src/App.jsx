import './App.css'
import Render from './components/Render'

const ejemplo = [
  {
    name: 'Fulanito',
    color: 'royalblue',
    checked: true
  },
  {
    name: 'Menganito',
    color: 'cyan',
    checked: false
  },
  {
    name: 'Jhon Doe',
    color: 'purple',
    checked: false
  }
]

function App () {
  return (
    <div>
      <h1>Lista de Elementos</h1>
      <Render data={ejemplo} />
    </div>
  )
}

export default App
