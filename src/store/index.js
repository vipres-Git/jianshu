/*
 * @Author: your name
 * @Date: 2020-03-29 23:44:04
 * @LastEditTime: 2020-03-29 23:56:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu\src\store\index.js
 */
import { createStore, compose } from 'redux'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // 为了使用redux
const store = createStore(reducer,composeEnhancers()) 

export default store