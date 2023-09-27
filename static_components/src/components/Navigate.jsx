const links = [
  'Home',
  'About',
  'Connect'
]

const Navigate = () => {
  return links.map((element) => (
    <li key={element} className='list-none hover:text-stone-200'>
      <a href='#'>
        {`${element}`}
      </a>
    </li>

  ))
}

export default Navigate
