import * as constants from './constants'
import { fromJS } from 'immutable'   //引入

const defaultState = fromJS({    //改成fromJS
  focused:false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
})

export default (state=defaultState, action)=>{
  switch(action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused',true) //使用state.set
    case constants.SEARCH_BLUR:
      return state.set('focused',false)
    case constants.CHANGE_LIST:
      console.log(action.data)
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}