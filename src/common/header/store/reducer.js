import * as constants from './constants'
import { fromJS }  from 'immutable'
/**
 * immutable.js => facebook研究的
 * immutable: 不可改变的对象
 */

const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
    if (action.type === constants.SET_FOCUS) {
        return state.set('focused',true)
    }

    if (action.type === constants.SET_BLUR) {
        return state.set('focused',false)
    }

    return state
}