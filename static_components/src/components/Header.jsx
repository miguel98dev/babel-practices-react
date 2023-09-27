import Navigate from './Navigate'

const Header = () => {
  return (
    <div className='flex items-center justify-between flex-wrap bg-teal-600 p-6  text-white'>
      <h1 className='font-bold'>
        Static Components
      </h1>
      <div className='flex gap-7'>
        <Navigate />
      </div>
    </div>
  )
}

export default Header
