import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

function Youtube (props) {
  const { video } = props
  return (
    <ReactPlayer
      url={video}
      width='100%'
      height='100%'
      config={{
        youtube: {
          playerVars: { autoplay: 0 }
        }
      }}
    />
  )
}

Youtube.propTypes = {
  video: PropTypes.string
}

export default Youtube
