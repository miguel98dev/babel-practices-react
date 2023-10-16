import { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisble] = useState(false)

  const handleScroll = () => {
    const scrollThreshold = 200
    setIsVisble(window.scrollY > scrollThreshold)
    console.log(window.scrollY)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop}>
          Scroll arriba
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton
