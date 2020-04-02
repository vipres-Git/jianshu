/*
 * @Author: your name
 * @Date: 2020-03-29 23:44:04
 * @LastEditTime: 2020-04-02 22:05:23
 * @LastEditors: Alan
 * @Description: In User Settings Edit
 * @FilePath: \jianshu\src\store\index.js
 */
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // 为了使用redux
const store = createStore(reducer,composeEnhancers(
  applyMiddleware(thunk)
)) 

export default store
