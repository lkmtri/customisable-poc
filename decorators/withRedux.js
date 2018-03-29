import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducers } from 'redux-store'

const loggerMiddlewares = (store) => (next) => (action) => {
  console.groupCollapsed(action.type)
  console.info('frame dispatching: ', action)
  next(action)
  console.info('frame next State: ', store.getState()['@@customisation'].sectionSettingData.pages)
  console.groupEnd()
}

const reduxMiddleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  loggerMiddlewares
))

export default (wrappedComponent) => withRedux(
  (initialState) => createStore(reducers, initialState, reduxMiddleware)
)(wrappedComponent)
