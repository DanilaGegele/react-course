import React, { useState } from 'react'
import css from './Input.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

function Input ({ className, isWide, label }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const inputClass = classNames(
    css.input,
    className,
    {
      [css.wide]: isWide,
      'input-hovered': isHovered,
      'input-focused': isFocused
    }
  )

  return (
    <div className={css.container}>
      <label className={css.label}>{label}</label>
      <input
        placeholder='name'
        className={inputClass}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false)
        }}
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false
          )
        }}
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
