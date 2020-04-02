import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const listChange = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data), // 传递过去一个immutable结构 store中的list是immutable类型
	totalPage: Math.ceil(data.length / 3) // 限制每页显示3条数据
})


export const setFocus = () => ({
	type: constants.SET_FOCUS
})

export const setBlur = () => ({
	type: constants.SET_BLUR
})

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
})


export const getList = () => {
	return (dispatch) => {
		axios.get('/api/data.json')
			.then(res => {
				res = res.data
				dispatch(listChange(res))
			}).catch((res) => {
				console.log(res);
			})
	}
}