import React from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import css from './Gallery.module.scss'
import PropTypes from 'prop-types'
import Image from './Image/Image'

function Gallery ({ data }) {
  const renderSlide = (item, key) => {
    return (
      <div>
        <Image key={key} img={item.img} />
      </div>
    )
  }

  return (
    <div className={css.wrapper}>
      <Swiper>
        {data.map((item, key) => renderSlide(item, key))}
      </Swiper>
    </div>
  )
}
Gallery.propTypes = {
  data: PropTypes.array
}

export default Gallery
