import React from 'react'
import { RemoteDataProvider } from '@aic/react-remote-data-provider'
import Wysiwyg from '../../components/Wysiwyg/Wysiwyg'
import PropTypes from 'prop-types'
const options = {
  request: {
    url: 'pageDetail.json'
  },
  reducerKey: 'PageDetailRDP'
}
function PageDetailRDP (props) {
  const { match } = props
  options.request.params = match.params
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

PageDetailRDP.propTypes = {
  match: PropTypes.object
}

export default PageDetailRDP
