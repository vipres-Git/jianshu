import * as constants from './constants'
import { fromJS }  from 'immutable'
/**
 * immutable.js => facebook研究的
 * immutable: 不可改变的对象
 */

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})

export default (state = defaultState, action) => {

    switch(action.type) {
        case constants.SET_FOCUS:
            return state.set('focused',true).set('mouseIn',true)
        case constants.SET_BLUR:
            return state.set('focused',false)
        case constants.CHANGE_LIST:
            // console.log(action.data);
            return state.set('list',action.data).set('totalPage',action.totalPage)
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case constants.CHANGE_PAGE:
            return state.set('page',action.page)
        default:
            break;
    }
   

    return state
}