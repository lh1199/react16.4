import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div>
      <div>
        <Input placeholder="todo info" style={{width: '300px', margin: '10px'}} value={props.inputValue} onChange={props.handleInputChange} />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List 
        style={{marginTop: '10px', margin: '10px', width: '300px'}} 
        bordered dataSource={props.list} 
        renderItem={(item, index) => (<List.Item onclick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>)} >
      </List>
    </div>
  )
}

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <Input placeholder="todo info" style={{width: '300px', margin: '10px'}} value={this.props.inputValue} onChange={this.props.handleInputChange} />
//           <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//         </div>
//         <List 
//           style={{marginTop: '10px', margin: '10px', width: '300px'}} 
//           bordered dataSource={this.props.list} 
//           renderItem={(item, index) => (<List.Item onclick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)} >
//         </List>
//       </div>
//     )
//   }
// }

export default TodoListUI