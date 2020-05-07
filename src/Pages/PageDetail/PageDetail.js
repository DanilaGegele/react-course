import React from 'react'
import Wysiwyg from '../../components/Wysiwyg/Wysiwyg'
import data from './assets/data'

function PageDetail () {
  const { text, title } = data
  return (
    <div>
      <h1>{title}</h1>
      <Wysiwyg text={text} />
    </div>
  )
}

export default PageDetail
