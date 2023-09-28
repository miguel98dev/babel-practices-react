import { useState } from 'react'

const Panel = ({ title = 'Panel contraido', children }) => {
  const [expanded, setExpanded] = useState(false)

  const toogleExpansion = () => {
    setExpanded((prevState) => !prevState)
  }

  return (
    <div className='panel'>
      <h2>{title}</h2>
      {expanded && <div>{children}</div>}
      <button className='action' onClick={toogleExpansion}></button>
        {expanded ? 'Contraer' : 'Expandir'}
      </button>

    </div>
  )
}

export default Panel
