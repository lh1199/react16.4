import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import List from './components/List'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends Component {

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//bpic.588ku.com//back_origin_min_pic/20/07/17/ac47614029427ab63196a0af524f8989.jpg!/fw/750/quality/99/unsharp/true/compress/true" alt=""></img>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
        <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow())
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow())
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo())
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toogleTopShow(true))
    } else {
      dispatch(actionCreators.toogleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch) (Home)