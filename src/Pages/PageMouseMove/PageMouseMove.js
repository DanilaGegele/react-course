import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOffset } from './_actions/PageMouseMoveActions'

function PageMouseMove () {
  const { offsetX, offsetY } = useSelector(state => state.pageMouseMove)
  const dispatch = useDispatch()
  useEffect(() => {
    const mouseMove = ({ offsetX, offsetY }) => setOffset({ offsetX, offsetY })(dispatch)
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [dispatch])
  return (
    <div>
      X - {offsetX}, Y - {offsetY}
    </div>
  )
}

export default PageMouseMove
