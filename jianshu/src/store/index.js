import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__redux_devtools_extension_compose__ || compose
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store