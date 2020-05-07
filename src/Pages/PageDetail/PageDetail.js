import React from 'react'
import Wysiwyg from '../../components/Wysiwyg/Wysiwyg'
import data from './assets/data'

function PageDetail () {
  const { text, title, img, date } = data
  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt='' />
      <div>{date}</div>
      <Wysiwyg text={text} />
    </div>
  )
}

export default PageDetail
