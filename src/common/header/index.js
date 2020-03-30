/*
 * @Author: your name
 * @Date: 2020-03-29 17:24:54
 * @LastEditTime: 2020-03-30 00:06:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu\src\common\header\index.js
 */
import React,{ Fragment } from 'react'
import {
    HeaderWrap,
    Logo,
    NavWrap,
    NavItem,
    NavSearch,
    Addition,
    Btn,
    NavSearchWrap
  } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

const Header = (props) => {
    return(
        <Fragment>
            <HeaderWrap>
                <Logo />
                <NavWrap>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont iconAa'></i>
                    </NavItem> 
                    <NavSearchWrap>
                        <NavSearch 
                            className={ props.focused ? 'focused' : ''}
                            onFocus={ props.handleFocus }
                            onBlur={ props.handleBlur }
                            >
                        </NavSearch>
                        <i className={ props.focused ? 'iconfont iconMagnifier focused' : 'iconfont iconMagnifier'}></i>
                    </NavSearchWrap>
                </NavWrap>
                <Addition>
                        <Btn className='article'>
                        <i className='iconfont iconbi'></i>
                        写文章
                        </Btn>
                    <Btn className='reg'>注册</Btn>
                </Addition>
            </HeaderWrap>
        </Fragment>
    )
}

/**
 * [description] 此时state是一个immutable对象
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    }
} 

const mapDispatchToProps = (dispatch) => {
   return {
    handleFocus() {
        dispatch(actionCreators.setFocus())
    },

    handleBlur() {
        dispatch(actionCreators.setBlur())
    }
   }
} 

export default connect(mapStateToProps,mapDispatchToProps)(Header)
