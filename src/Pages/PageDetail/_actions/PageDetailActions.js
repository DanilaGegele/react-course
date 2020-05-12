import { START_LOADING_PAGE_DETAIL, END_LOADING_PAGE_DETAIL } from '../_reducers/pageDetail'

export function startLoading () {
  return (dispatch) => {
    dispatch({
      type: START_LOADING_PAGE_DETAIL
    })
  }
}

export function endLoading ({ data }) {
  return (dispatch) => {
    dispatch({
      type: END_LOADING_PAGE_DETAIL,
      payload: data
    })
  }
}
