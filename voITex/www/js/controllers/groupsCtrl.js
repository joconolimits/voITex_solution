app.controller('groupsCtrl', function ($scope, socket) {

    //socket.on('connect',function(){
    //    socket.emit('addUser', 'Vladimir');
    //});



    $scope.IOConnect = function () {
        socket.emit('voitexMessage', 'Backend test message');
        console.log('message to socket sent');
    }
})