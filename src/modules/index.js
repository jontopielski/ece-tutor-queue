import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { Reducer } from 'light-form';
import  counter from './counter'

export default combineReducers({
  routing: routerReducer,
  modal: Reducer('modal'),
  counter
})
