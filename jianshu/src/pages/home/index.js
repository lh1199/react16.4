import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import List from './components/List'

class Home extends Component {
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
      </HomeWrapper>
    )
  }
}

export default Home