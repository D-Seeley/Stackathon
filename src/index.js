import io from 'socket.io-client';

// Example of listening to draw events:
//   (This logging will probably get really annoying):
// whiteboard.on('draw', console.log)
const app = document.getElementById('app');

const socket = io(window.location.origin)

socket.on('connect', () => console.log('I have made a persistent two-way connection to the server!'));
socket.on('clickReceived', (message)=> {
    console.log('I heard a ', message);
    // app.innerHTML = message;
})

const button = document.getElementById('button');
button.onclick = () => {
    const message = 'Click'
    console.log('Sending: ', message)
    socket.emit('click', message)
};

// socket.on('load', function (strokes) {

// });

// socket.emit('event', start, end, color);

