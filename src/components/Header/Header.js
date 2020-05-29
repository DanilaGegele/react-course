import React, { useEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import css from './Header.module.scss'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { setIsFixed, setIsFixedOnTop } from './_actions/HeaderActions'

function Header () {
  const lastScrollTop = useRef(0)
  const isFixed = useSelector(state => state.header.isFixed)
  const isFixedOnTop = useSelector(state => state.header.isFixedOnTop)
  const dispatch = useDispatch()
  useEffect(() => {
    const onScroll = () => {
      const top = window.pageYOffset
      if (lastScrollTop.current > top && !isFixed) {
        setIsFixed(true)(dispatch)
      } else if (lastScrollTop.current <= top && top > 100 && isFixed) {
        setIsFixed(false)(dispatch)
      }

      if (top === 0 && !isFixedOnTop) {
        setIsFixedOnTop(true)(dispatch)
      } else if (isFixedOnTop) {
        setIsFixedOnTop(false)(dispatch)
      }

      lastScrollTop.current = top
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [dispatch, isFixed, isFixedOnTop])
  return (
    <div className={css.header}>
      <div
        className={classNames(css.wrap, {
          [css._fixed]: isFixed,
          [css._fixed_on_top]: isFixedOnTop
        })}
      >
        <Container>
          <Navbar bg='light'>
            <Navbar.Brand><Link to='/'>Книга рецептов</Link></Navbar.Brand>
          </Navbar>
        </Container>
      </div>
    </div>
  )
}

export default Header
