import React, { useState } from 'react'
import css from './Input.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

function Input ({ className, isWide, label }) {
  const [isFocus, setIsFocus] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const inputClass = classNames(
    css.input,
    className,
    {
      [css.wide]: isWide,
      'input-focus': isFocus,
      'input-over': !isFocus && isHovered
    }
  )
  return (
    <div>
      <label>{label}</label>
      <input
        className={inputClass}
        onFocus={() => { setIsFocus(true) }}
        onBlur={() => { setIsFocus(false) }}
        onMouseEnter={() => { setIsHovered(true) }}
        onMouseLeave={() => { setIsHovered(false) }}
      />
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  isWide: PropTypes.bool,
  label: PropTypes.string
}

export default Input
