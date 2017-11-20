import React from 'react'
import getRoutes from './config/routes'

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app/App'

import thunk from 'redux-thunk'
import { checkIfAuthed } from 'helpers/auth'

const target = document.querySelector('#root')

const store = createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))


function checkAuth () {
  if (store.getState().users.isFetching === true) {
    return
  }
  return checkIfAuthed(store)
}

render(
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
  target
)
