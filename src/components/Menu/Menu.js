import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Menu.module.scss'

function Menu () {
  return (
    <>
      <h2>Меню</h2>
      <div><NavLink to='/' activeClassName={css.active} exact>На главную</NavLink></div>
      <div><NavLink to='/detail' activeClassName={css.active}>Детальная страница</NavLink></div>
      <div><NavLink to='/css-module' activeClassName={css.active}>Css module</NavLink></div>
      <div><NavLink to='/asdasdas' activeClassName={css.active}>404</NavLink></div>
      <div><NavLink to='/list' activeClassName={css.active}>Список</NavLink></div>
    </>
  )
}

export default Menu
