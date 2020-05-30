import { combineReducers } from 'redux'
import { reducer as remoteData } from '@aic/react-remote-data-provider'
import pageDetail from '../Pages/PageDetail/_reducers/pageDetail'
import header from '../components/Header/_reducers/header'
import pageMouseMove from '../Pages/PageMouseMove/_reducers/pageMouseMove'

export const rootReducer = combineReducers({
  pageDetail,
  remoteData,
  header,
  pageMouseMove
})
