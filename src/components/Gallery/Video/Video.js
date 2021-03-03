import React from 'react'
import css from './video.module.scss'
import PropTypes from 'prop-types'

function Video ({ video }) {
  return (
    <video
      className={css.video}
      src={video}
      loop
      controls
      muted
    />
  )
}

Video.propTypes = {
  video: PropTypes.string
}

export default Video
