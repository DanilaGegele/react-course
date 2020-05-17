import React from 'react'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'
import Wysiwyg from '../../components/Wysiwyg/Wysiwyg'
const options = {
  request: {
    url: 'pageDetail.json'
  },
  reducerKey: 'PageDetailRDP'
}
function PageDetailRDP () {
  return (
    <RemoteDataProvider {...options}>
      {({ response: { text, title, img, date } }) => {
        return (
          <div>
            <h1>{title}</h1>
            <img src={img} alt='' />
            <div>{date}</div>
            <Wysiwyg text={text} />
          </div>
        )
      }}
    </RemoteDataProvider>
  )
}

export default PageDetailRDP
