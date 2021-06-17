let messageEl = document.getElementById('message')
let inputEl = document.getElementById('msg-input')
let buttonEl = document.getElementById('send')
let chatContainer= document.querySelector('ul')

const socket = io('ws://localhost:3030')

socket.on('connect', () => {
    console.log('connected')
})

socket.on('message', (data) => {
    let listEl = document.createElement('li')
    listEl.innerText = data
    chatContainer.appendChild(listEl)
})

buttonEl.onclick = () => {
    console.log(inputEl.value)
    socket.send(inputEl.value)
    inputEl.value = ''
}

// let socket = new WebSocket('ws://localhost:3030')

// socket.onopen = (e) => {
//     socket.send("Wild pokemon appeared")
// }

// socket.onclose = (e) => {
//     socket.send("Bye")
// }

// socket.onmessage = (msg) => {
//     messageEl.innerText = msg.data
// }
