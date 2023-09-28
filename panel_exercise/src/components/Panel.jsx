import { useState } from 'react'

const Panel = ({ title = 'Panel contraido', children }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

export default Panel
