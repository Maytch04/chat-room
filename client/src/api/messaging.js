import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('localhost:3001')



export function login(username) {
    store.dispatch({
        type: 'LOGIN',
        username
    })
}

export function addMessage(message) {
    console.log('api message', message)
    socket.emit('addMessage', message)
}

socket.on('new message', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})

