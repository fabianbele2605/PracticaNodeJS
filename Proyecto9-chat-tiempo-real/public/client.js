const socket = io();

// Referencias a elementos html
const form = document.getElementById('chat-form');
const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

// Referencias adicionales
const loginContainer = document.getElementById('login-container');
const chatContainer = document.getElementById('chat-container');
const usernameInput = document.getElementById('username-input');
const joinBtn = document.getElementById('join-btn');

let username = '';

// Unirse al chat
joinBtn.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if(username) {
        socket.emit('join', username);
        loginContainer.style.display = 'none';
        chatContainer.style.display = 'block';
        input.focus();
    }
})

// Enviar mensaje
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(input.value){
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

// Recibir mensaje
socket.on('chat message', (msg) => {
    const item = document.createElement('div');
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});