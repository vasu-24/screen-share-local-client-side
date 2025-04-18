const { ipcRenderer } = require('electron');

// Function to start screen sharing
const startScreenShare = () => {
    ipcRenderer.send('start-share'); // Send message to start sharing
};

// Function to stop screen sharing
const stopScreenShare = () => {
    ipcRenderer.send('stop-share'); // Send message to stop sharing
};

// Event listener for start share button click
document.getElementById('start-share').addEventListener('click', startScreenShare);

// Event listener for stop share button click
document.getElementById('stop-share').addEventListener('click', stopScreenShare);

// Event listener for UUID received from the server
ipcRenderer.on('uuid', (event, uuid) => {
    console.log('Screen share UUID:', uuid);
});
