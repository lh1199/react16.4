import styled from 'styled-components'

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
`

export const LoginBox = styled.div`
  width: 400px;
  height: 180px;
  background: #fff;
  margin: 100px auto;
  padding-top: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .1)
`

export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 10px auto;
`

export const Button = styled.div`
  width: 220px;
  height: 30px;
  line-height: 30px;
  background: #3194d0;
  margin: 10px auto;
  border-radius: 15px;
  color: #fff;
  text-align: center;
  cursor: pointer;
`