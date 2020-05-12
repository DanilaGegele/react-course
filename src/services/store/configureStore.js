import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from '../../reducers/_index'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export default function configureStore () {
  let store
  if (process.env.NODE_ENV === 'development') {
    store = compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(createLogger())
    )(createStore)(rootReducer)
  } else {
    store = compose(
      applyMiddleware(thunkMiddleware)
    )(createStore)(rootReducer)
  }
  return store
}
