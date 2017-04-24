
import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('localhost:3001')



export function addMessage(message) {
    socket.emit('addMessage', message)
}

export function addUser(user){
    socket.emit('addUser', user)
}


socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
}),

socket.on('newUser', function(user){
    store.dispatch({
        type:'ADD_USER',
        user
    })
})