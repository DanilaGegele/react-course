import React from 'react'
import 'swiper/css/swiper.min.css'
import css from './Image.module.scss'
import PropTypes from 'prop-types'

function Image ({ img }) {
  return (
    <div className={css.slide} style={{ backgroundImage: `url(${img})` }} />
  )
}
Image.propTypes = {
  img: PropTypes.string
}

export default Image
