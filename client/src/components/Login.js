import React, { Component } from 'react'
import { login } from '../api/messaging'


class Login extends Component{
    constructor(){
        super()
        this.state = {
            username:''
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        login(this.state.username)
        this.setState({
            username:''
        })
        this.props.history.push('/chatroom')
    }
    
    render(){
        console.log(this.state.username)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter Your Username" name="username" onChange={this.handleChange} value={this.state.username}/>
                </form>
            </div>
        )
    }
}

export default Login