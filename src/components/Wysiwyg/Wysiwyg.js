import React from 'react'
import PropTypes from 'prop-types'
import './Wysiwyg.scss'
function Wysiwyg ({ text }) {
  return (
    <div className='wysiwyg' dangerouslySetInnerHTML={{ __html: text }} />
  )
}

Wysiwyg.propTypes = {
  text: PropTypes.string
}

export default Wysiwyg
