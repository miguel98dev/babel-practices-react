import { useState } from 'react'

const Panel = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false)

  const toogleExpansion = () => {
    setExpanded(prevState => !prevState)
  }

  return (
    <div className='panel'>
      <h1 className='title'>{title}</h1>
      {expanded && <div>{children}</div>}
      <button className='action' onClick={toogleExpansion}>
        {expanded ? 'Contraer' : 'Expandir'}
      </button>

    </div>
  )
}

export default Panel
