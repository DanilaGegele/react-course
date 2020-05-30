import cleanSet from 'clean-set'
export const SET_POSITION_PAGE_MOUSE_MOVE = 'SET_POSITION_PAGE_MOUSE_MOVE'

const initialState = {
  offsetX: 0,
  offsetY: 0
}

export default function PageMouseMove (state = initialState, action) {
  switch (action.type) {
    case SET_POSITION_PAGE_MOUSE_MOVE: {
      const result = cleanSet(state, 'offsetX', action.payload.offsetX)
      return cleanSet(result, 'offsetY', action.payload.offsetY)
    }
    default:
      return state
  }
}
