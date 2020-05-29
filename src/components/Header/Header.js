import React, { useEffect, useState, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import css from './Header.module.scss'
import classNames from 'classnames'

function Header () {
  const lastScrollTop = useRef(0)
  const [isFixed, setIsFixed] = useState(true)
  const [isFixedOnTop, setIsFixedOnTop] = useState(true)
  useEffect(() => {
    const onScroll = () => {
      const top = window.pageYOffset
      if (lastScrollTop.current > top && !isFixed) {
        setIsFixed(true)
      } else if (lastScrollTop.current <= top && top > 100 && isFixed) {
        setIsFixed(false)
      }

      if (top === 0 && !isFixedOnTop) {
        setIsFixedOnTop(true)
      } else if (isFixedOnTop) {
        setIsFixedOnTop(false)
      }

      lastScrollTop.current = top
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [isFixed, isFixedOnTop])
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
