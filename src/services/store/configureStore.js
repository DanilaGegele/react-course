import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from '../../reducers/_index'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { collectorMiddleware } from '@aic/react-remote-data-provider/extensions/collector'

export default function configureStore () {
  let store
  if (process.env.NODE_ENV === 'development') {
    store = compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(collectorMiddleware()),
      applyMiddleware(createLogger())
    )(createStore)(rootReducer)
  } else {
    store = compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(collectorMiddleware())
    )(createStore)(rootReducer)
  }
  return store
}
