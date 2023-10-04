import { useEffect, useState } from 'react'

const VerticalPosition = () => {
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <p>Posición vertical: {scrollY}px</p>
    </div>
  )
}

export default VerticalPosition
