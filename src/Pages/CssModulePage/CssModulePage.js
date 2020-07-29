import React from 'react'
import css from './CssModulePage.module.css'
import Button from './components/Button/Button'
import Input from './components/Input/Input'

function CssModulePage () {
  return (
    <div className={css.wrapper}>
      <div className={css.list}>
        <div className={css.item}>
          <Button className={css.btn} isRed label='Кнопка' />
          <Input className={css.inputFromCssModule} isWide label='Label' />
        </div>
      </div>
    </div>
  )
}

export default CssModulePage
