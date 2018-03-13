import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { reducers, initialState } from 'redux-store'

const reduxMiddleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware
))

export default (wrappedComponent) => withRedux(
  () => createStore(reducers, initialState, reduxMiddleware)
)(wrappedComponent)
