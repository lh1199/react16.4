import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  float: left;
  background: #f7f7f7;
  .topic-pic{
    margin-right: 10px;
    width: 32px;
    height: 32px;
    display: block;
    float: left;
  }
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic{
    width: 120px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: content;
`