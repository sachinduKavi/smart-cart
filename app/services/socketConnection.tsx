import io from 'socket.io-client'

const SOCKET_URL = 'http://192.168.8.167:3000'
// Initialize the connection 
const socket = io(SOCKET_URL, {
    transports: ['websocket']
})

const initializeSocketConnection = async () => {

    // Connection established
    socket.on('connect', () => {
        console.log('Connection established with socket')
    })

    socket.on('disconnect',  () => {
        console.log('Connection disconnected with socket')
    })
}

// Socket disconnect
const socketDisconnect = () => {
    socket.disconnect()
}


// Send message to the socket 
const emitMessage = (message: string) => {
    socket.emit('message', message)
}


export {
    initializeSocketConnection,
    emitMessage,
    socketDisconnect
}