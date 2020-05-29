import cleanSet from 'clean-set'
export const SET_IS_FIXED_HEADER = 'SET_IS_FIXED_HEADER'
export const SET_IS_FIXED_ON_TOP_HEADER = 'SET_IS_FIXED_ON_TOP_HEADER'

const initialState = {
  isFixed: true,
  isFixedOnTop: true
}

export default function Header (state = initialState, action) {
  switch (action.type) {
    case SET_IS_FIXED_HEADER:
      return cleanSet(state, 'isFixed', action.payload)
    case SET_IS_FIXED_ON_TOP_HEADER:
      return cleanSet(state, 'isFixedOnTop', action.payload)
    default:
      return state
  }
}
