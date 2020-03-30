/**
 * redux-immutable 或 redux同样有combineReducers这个方法
 */
import { combineReducers } from 'redux-immutable'
import { reducer as HeaderReducer } from '../common/header/store'

const reducer = combineReducers({
    header: HeaderReducer
})

export default reducer