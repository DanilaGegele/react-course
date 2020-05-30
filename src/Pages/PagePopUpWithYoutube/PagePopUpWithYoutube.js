import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import YouTube from 'react-youtube'
import css from './PagePopUpWithYoutube.module.scss'

function PagePopUpWithYoutube () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  }

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName={css.modal}>
        <Modal.Body>
          <YouTube videoId='GLuAIloEWRY' opts={opts} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PagePopUpWithYoutube
