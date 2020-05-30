import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-modal'
import ReactPlayer from 'react-player'

const customStyles = {
  overlay: {
    zIndex: 1000
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

function PagePopUpWithYoutube () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        isOpen={show}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <ReactPlayer
          url='https://youtu.be/GLuAIloEWRY'
          width={640}
          height={390}
          config={{
            youtube: {
              playerVars: { autoplay: 0 }
            }
          }}
        />
      </Modal>
    </>
  )
}

export default PagePopUpWithYoutube
