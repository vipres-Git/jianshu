/*
 * @Author: your name
 * @Date: 2020-03-29 17:29:25
 * @LastEditTime: 2020-03-29 22:12:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jianshu\src\common\header\style.js
 */
import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrap = styled.div `
    position: relative;
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})
`
    display: block;
    height: 56px;
    width: 100px;
    position: absolute;
    left: 30px;
    top: 0;
    background: url(${logoPic});
    background-size: contain;
`

export const NavWrap = styled.div `
    width: 960px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding-right: 30px;
`

export const NavItem = styled.div `
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
    line-height: 56px;
    padding: 0 15px;
    color: #333;
    font-size: 16px;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})
`
    width: 160px;
    height: 38px;
    border-radius: 19px;
    background: #eee;
    border: none;
    outline: none;
    font-size: 14px;
    margin-top: 9px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    margin-left: 10px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    transition: all .3s ease-out;
    &.focused {
        width: 220px;
        transition: all .3s ease-out;
    }
`

export const Addition = styled.div `
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Btn = styled.div `
    float: right;
    margin-top: 9px;
    line-height: 38px;
    border-radius: 19px;
    margin-right: 20px;
    border: 1px solid #ccc;
    padding: 0 20px;
    font-size: 15px;
    &.reg {
        color: #ea6f5a;
        border: 1px solid rgba(236,97,73,.7)
    }
    &.article {
        background: #ea6f5a;
        color: #fff;
    }
    .iconbi {
        margin-right: 5px;
    }
`

export const NavSearchWrap = styled.div `
    float: left;
    position: relative;
    .iconMagnifier {
        position: absolute;
        right: 10px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        &.focused {
            background: #ccc;
        }
    }
`
