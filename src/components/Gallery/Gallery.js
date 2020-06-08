import React, { useState } from 'react'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.min.css'
import css from './Gallery.module.scss'
import PropTypes from 'prop-types'
import Image from './Image/Image'
import Video from './Video/Video'
import Youtube from './Youtube/Youtube'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

function Gallery ({ data }) {
  const [swiper, setSwiper] = useState(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext()
    }
  }

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev()
    }
  }

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

  const params = {
    navigation: {
      nextEl: `.${css.next}`,
      prevEl: `.${css.prev}`
    },
    renderPrevButton: () => <Button className={css.prev}>Prev</Button>,
    renderNextButton: () => <Button className={css.next}>Next</Button>,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      slideChangeTransitionStart: function () {
        const { isBeginning, isEnd } = this
        setIsBeginning(isBeginning)
        setIsEnd(isEnd)
      }
    }
  }

  return (
    <div className={css.wrapper}>
      <Swiper getSwiper={setSwiper} {...params}>
        {data.map((item, key) => renderSlide(item, key))}
      </Swiper>
      <ButtonGroup>
        <Button onClick={goPrev} variant={isBeginning ? 'secondary' : 'primary'}>Prev</Button>
        <Button onClick={goNext} variant={isEnd ? 'secondary' : 'primary'}>Next</Button>
      </ButtonGroup>
    </div>
  )
}
Gallery.propTypes = {
  data: PropTypes.array
}

export default Gallery
