import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Menu.module.scss'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

function Menu () {
  const isFixedHeader = useSelector(state => state.header.isFixed)
  const { offsetX, offsetY } = useSelector(state => state.pageMouseMove)
  const renderOffset = () => {
    if (offsetX || offsetY) {
      return (
        <div>
          X - {offsetX}, Y - {offsetY}
        </div>
      )
    }
  }
  return (
    <div className={classNames(css.wrap, { [css._header]: isFixedHeader })}>
      <h2>Меню</h2>
      <div><NavLink to='/' activeClassName={css.active} exact>На главную</NavLink></div>
      <div><NavLink to='/detail' activeClassName={css.active}>Детальная страница</NavLink></div>
      <div><NavLink to='/detail-rdp' activeClassName={css.active}>Детальная страница RDP</NavLink></div>
      <div><NavLink to='/css-module' activeClassName={css.active}>Css module</NavLink></div>
      <div><NavLink to='/asdasdas' activeClassName={css.active}>404</NavLink></div>
      <div><NavLink to='/list' activeClassName={css.active}>Список и деталка</NavLink></div>
      <div><NavLink to='/list-add-more' activeClassName={css.active}>Список с подгрузкой</NavLink></div>
      <div><NavLink to='/list-pagination' activeClassName={css.active}>Список с пагинацией</NavLink></div>
      <div><NavLink to='/list-pagination2' activeClassName={css.active}>Список с пагинацией 2</NavLink></div>
      <div><NavLink to='/mouse-move' activeClassName={css.active}>useEffect mouseMove</NavLink></div>
      <div><NavLink to='/popup' activeClassName={css.active}>Popup</NavLink></div>
      <div><NavLink to='/swiper' activeClassName={css.active}>Swiper Gallery</NavLink></div>
      {renderOffset()}
    </div>
  )
}

export default Menu
