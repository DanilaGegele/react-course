import React, { useEffect, useState } from 'react'

function PageMouseMove () {
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  useEffect(() => {
    const mouseMove = ({ offsetX, offsetY }) => {
      setOffsetX(offsetX)
      setOffsetY(offsetY)
    }
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  return (
    <div>
      X - {offsetX}, Y - {offsetY}
    </div>
  )
}

export default PageMouseMove
