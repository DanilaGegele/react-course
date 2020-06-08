import React from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import css from './Gallery.module.scss'
import PropTypes from 'prop-types'
import Image from './Image/Image'
import Video from './Video/Video'
import Youtube from './Youtube/Youtube'

function Gallery ({ data }) {
  const renderSlide = ({ type, img, video }, key) => {
    if (type === 'video') {
      return (
        <div key={key}>
          <Video video={video} />
        </div>
      )
    } else if (type === 'youtube') {
      return (
        <div key={key}>
          <Youtube video={video} />
        </div>
      )
    } else if (type === 'img') {
      return (
        <div key={key}>
          <Image img={img} />
        </div>
      )
    }
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
