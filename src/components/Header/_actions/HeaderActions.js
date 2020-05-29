import { SET_IS_FIXED_HEADER, SET_IS_FIXED_ON_TOP_HEADER } from '../_reducers/header'

export function setIsFixed (payload) {
  return (dispatch) => {
    dispatch({
      type: SET_IS_FIXED_HEADER,
      payload
    })
  }
}

export function setIsFixedOnTop (payload) {
  return (dispatch) => {
    dispatch({
      type: SET_IS_FIXED_ON_TOP_HEADER,
      payload
    })
  }
}
