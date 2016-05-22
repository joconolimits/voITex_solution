var express = require('express');
var app = express();
var _ = require('lodash');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

var connectedUsers = [];

io.on('connection', function (socket, phoneNumber) {
    //console.log('a user connected, socket is: ', socket);
    connectedUsers.push({ 'nickname': phoneNumber, 'socket': socket.id });

    socket.on('disconnect', function () {
        _.remove(connectedUsers, function (user) {
            return user.socket == socket.id;
        });
        console.log('user disconnected');
    });

    socket.on('voitexMessage', function (data) {
        // we tell the client to execute 'new message'
        console.log('The recieved message is: ', data.message, data.nickname);
        var contact = _.find(connectedUsers, { 'nickname': data.nickname });
        io.to(contact.socket).emit('messageReceived', data.message);
    });
});


server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});