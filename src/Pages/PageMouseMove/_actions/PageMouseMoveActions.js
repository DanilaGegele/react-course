import { SET_POSITION_PAGE_MOUSE_MOVE } from '../_reducers/pageMouseMove'

export function setOffset (payload) {
  return (dispatch) => {
    dispatch({
      type: SET_POSITION_PAGE_MOUSE_MOVE,
      payload
    })
  }
}
