import cleanSet from 'clean-set'
export const START_LOADING_PAGE_DETAIL = 'START_LOADING_PAGE_DETAIL'
export const END_LOADING_PAGE_DETAIL = 'END_LOADING_PAGE_DETAIL'
export const RELOAD_PAGE_DETAIL = 'RELOAD_PAGE_DETAIL'

const initialState = {
  isAjax: false,
  isEmpty: true,
  data: {}
}

export default function PageDetail (state = initialState, action) {
  switch (action.type) {
    case START_LOADING_PAGE_DETAIL:
      return cleanSet(state, 'isAjax', true)
    case END_LOADING_PAGE_DETAIL: {
      let result = cleanSet(state, 'isAjax', false)
      result = cleanSet(result, 'isEmpty', false)
      result = cleanSet(result, 'data', action.payload)
      return result
    }
    case RELOAD_PAGE_DETAIL: {
      let result = cleanSet(state, 'isAjax', false)
      result = cleanSet(result, 'isEmpty', true)
      return result
    }
    default:
      return state
  }
}
