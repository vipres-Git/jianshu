/*
 * @Author: your name
 * @Date: 2020-03-29 17:24:54
 * @LastEditTime: 2020-04-03 00:08:53
 * @LastEditors: Alan
 * @Description: In User Settings Edit
 * @FilePath: \jianshu\src\common\header\index.js
 */
import React, { Component, Fragment } from 'react'
import {
    HeaderWrap,
    Logo,
    NavWrap,
    NavItem,
    NavSearch,
    Addition,
    Btn,
    NavSearchWrap,
    SearchInfo,
    InfoChange,
    InfoItem,
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'


class Header extends Component {

    getListArea() {
        const { mouseIn, focused, list, page, totalPage, handleMouseLeave, handleChangePage } = this.props
        let newList = list.toJS() // list是一个immutable对象 此方法转为一般数组
        let pageList = []

        if (newList.length) {
            for (let i = (page - 1) * 3; i < page * 3; i++) {
                pageList.push(
                    <InfoItem key={newList[i]} className={!newList[i] ? 'hidden' : ''} >{newList[i]}</InfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseLeave={handleMouseLeave}>
                    <InfoChange>
                        <span className='hot-txt'>热门搜索</span>
                        <div className='change' onClick={() => handleChangePage(page, totalPage)}>
                            <i className='iconfont iconbi'></i>
                                        换一批
                         </div>
                    </InfoChange>
                    {pageList}
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render() {
        const { focused, handleFocus, handleBlur } = this.props
        return (
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
                                className={focused ? 'focused' : ''}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            >
                            </NavSearch>
                            <i className={focused ? 'iconfont iconMagnifier focused' : 'iconfont iconMagnifier'}></i>
                            {/* 控制搜索内容的隐藏显示 */}
                            {this.getListArea()}
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
}

/**
 * [description] 此时state是一个immutable对象
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'), // 方式1
        list: state.getIn(['header', 'list']), // 方式2 数组内容
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            dispatch(actionCreators.getList()) // ajax异步获取数据
            dispatch(actionCreators.setFocus())
        },

        handleBlur() {
            dispatch(actionCreators.setBlur())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, total) {
            // console.log(page);
            // console.log(total);
            if (page < total) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
