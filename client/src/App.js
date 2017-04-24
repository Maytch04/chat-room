import React, { Component } from 'react'
import './App.css'
import { addUser, addMessage} from './api/messaging'
import {connect} from 'react-redux'
import moment from 'moment';

class App extends Component {
  constructor() {
    super()
    this.state = {
      message: '', 
      user:'',
      timeNow:moment().format('LTS')
    }
  }




  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // updateUsers = (e) => {
  //   this.setState({
  //    [e.target.name]: e.target.value
  //   })
  // }

    handleSubmit = (e) => {
    e.preventDefault()
    addMessage(this.state.message),
    addUser( this.state.user)
    this.setState({
      message:'',
      user:'',
      timeNow:moment().format('LTS')
    })
  }

  render() {
    console.log(this.props.users)
    return (
      <div className="chatWindow" >

         <h3 className="message">Message</h3>

        <form className="chatForm" onSubmit={this.handleSubmit}>

          {/*<input onChange={this.handleChange} name="user" placeholder="Enter a username..." value={this.state.user}/>*/}

          <input onChange={this.handleChange} name="message" placeholder="Send a message..." value={this.state.message}/>
          <button type="submit">Send</button>
        </form>
        
        <div className="messageWindow">
          <ul>
            {/*{this.props.users.map((user, i)=>(
              <div key={'user' + i}>
              <li>{user}</li> 
              <br />
              </div>
            ))}*/}
            
            {this.props.messages.map((message, i)=>(
              <div key={'message' + i}>
              <li>{message}</li>
             <li>{this.state.timeNow}</li>
              <br />
              </div>
            ))}
           
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => state 



export default connect(mapStateToProps)(App)