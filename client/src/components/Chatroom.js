import React, { Component } from 'react'
import '../../styles/chatroom.css'
import { addMessage } from '../api/messaging'
import {connect} from 'react-redux'
import moment from 'moment';
//import Login from './Login'

class Chatroom extends Component {
  constructor() {
    super()
    this.state = {
      message: '', 
      
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

     handleSubmit = (e) => {
       e.preventDefault()
    addMessage({
      message:this.state.message,
      username:this.props.username,
      timeNow:moment().format('LTS')
      })
    this.setState({
      message:''
      })

    }

  render() {
      console.log(this.props.messages, 'msgArr')
      console.log(this.state, 'state')
    return (
      <div className="chatWindow" >
        
          
            
         <h3 className="message">Message</h3>

        <form className="chatForm" onSubmit={this.handleSubmit}>
         
          <input onChange={this.handleChange} name="message" type="text" placeholder="Send a message..." value={this.state.message}/>
          
        </form>
        
        <div className="messageWindow">
          <ul>
           {this.props.messages.map((message, i)=>(
            <li>{message.message}</li>
          ))}
         </ul>
          
        </div>
      </div>
    )
  }
}

function mapStateToProps(appState){
  console.log(appState, 'appState')
  return{
    messages: appState.messages, 
    username: appState.username
  }
}

export default connect(mapStateToProps)(Chatroom)