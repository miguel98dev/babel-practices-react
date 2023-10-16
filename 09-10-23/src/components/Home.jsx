import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to='/home/hola'>Hola</Link>
          </li>
          <li>
            <Link to='/hola'>Adios</Link>
          </li>
          <li>
            <Link to='/hola'>hey</Link>
          </li>
          <li>
            <Link to='/hola'>dew</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
