import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style'

class Header extends Component {

  getListArea() {
    const { focused, list, page } = this.props
    const newList = list.toJS()
    const pageList = []

    for (let i = ((page-1) * 10); i < page * 10; i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }

    if (focused) {
      return (<SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfoTitle>
      </SearchInfo>)
    } else {
      return null
    }
  }

  render() {
    const { focused, handleInputBlur, handleInputFocus } = this.props
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={focused} classNames="slide">
              <NavSearch className={focused ? 'focused' : ''} onFocus={handleInputFocus} onBlur={handleInputBlur}></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing">
            <i className="iconfont">&#xe6e5;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    // state.get('header').get('focused')
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Header)