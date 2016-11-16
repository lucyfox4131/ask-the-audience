var socket = io();

var connectionCount = document.getElementById('connection-count');

socket.io('usersConnected', function(count){
  connectionCount.innerText = 'Connected Users: ' + count;
})
