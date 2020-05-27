import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Wysiwyg from '../../components/Wysiwyg/Wysiwyg'
import { axiosLocal } from '../../services/axiosInstances'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PageDetailActions from './_actions/PageDetailActions'
import { Button } from 'react-bootstrap'

function mapStateToProps (state) {
  return {
    pageDetailState: state.pageDetail
  }
}

function mapDispatchToProps (dispatch) {
  return {
    pageDetailActions: bindActionCreators(PageDetailActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageDetail)

function PageDetail (props) {
  const [count, setCount] = useState(0)
  const { pageDetailState: { isAjax, data, isEmpty }, pageDetailActions: { startLoading, endLoading, reload } } = props
  const { text, title, img, date } = data
  useEffect(() => {
    if (isEmpty && !isAjax) {
      startLoading()
      axiosLocal.get('pageDetail.json').then((response) => {
        endLoading(response)
      })
    }
  }, [endLoading, isAjax, isEmpty, startLoading])

  return (
    <div>
      <Button onClick={() => { setCount((count) => count + 1) }}>Rerender</Button>
      <h1>{title} {count}</h1>
      <img src={img} alt='' />
      <div>{date}</div>
      <Wysiwyg text={text} />
      <Button onClick={reload}>Перезагрузить новость</Button>
    </div>
  )
}

PageDetail.propTypes = {
  pageDetailState: PropTypes.object,
  pageDetailActions: PropTypes.object
}
