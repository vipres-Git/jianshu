/*
 * @Author: your name
 * @Date: 2020-03-29 12:07:06
 * @LastEditTime: 2020-03-29 21:23:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu\src\index.js
 */
 import React,{ Fragment } from 'react'
 import ReactDom from 'react-dom'
 import App from './App'
 import GlobalStyle from './style.js'
 import './statics/iconfont/iconfont.css'

 ReactDom.render(
    <Fragment>
        <GlobalStyle />
            <App />
    </Fragment>,document.getElementById('root'))

   

 