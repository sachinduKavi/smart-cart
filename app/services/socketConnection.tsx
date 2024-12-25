import io from 'socket.io-client'

const SOCKET_URL = 'http://192.168.8.167:3000'


class SocketConnection  {
    socket: any
    cartID: string


    constructor(cartID: string) {
        this.cartID = cartID
        this.socket = io(SOCKET_URL, {
            transports: ['websocket'],
            query: {cartID: cartID}
        })

        // Connection established
        this.socket.on('connect', () => {
            console.log('Connection established with socket')
        })

        this.socket.on('disconnect',  () => {
            console.log('Connection disconnected with socket')
        })
    }


    socketDisconnect() {
        this.socket.disconnect()
    }

    emitMessage(message: string) {
        this.socket.emit(this.cartID, message)
    }
}


export default SocketConnection