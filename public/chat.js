console.log('js loaded!')
const socket = io();
const form = document.querySelector('form');
const msgUL = document.getElementById('messages');
const input = document.getElementById('m');

form.addEventListener('submit', (e) => {
  // in jquery, e.preventDefault is not needed but in vanilla javascript, e.preventDefault() is necessary for this chatbox to work!
  e.preventDefault();
  socket.emit('chat message', input.value);
  input.value = '';
  return false;
});
socket.on('chat message', msg => {
  let li = document.createElement('li');
  li.innerHTML = msg;
  msgUL.appendChild(li);
});