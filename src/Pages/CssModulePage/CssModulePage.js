import React from 'react'
import css from './CssModulePage.module.css'
import Button from './components/Button/Button'

function CssModulePage () {
  return (
    <div className={css.wrapper}>
      <div className={css.list}>
        <div className={css.item}>
          <Button className={css.btn} isRed label='Кнопка' />
        </div>
      </div>
    </div>
  )
}

export default CssModulePage
