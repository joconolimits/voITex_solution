appServices.factory('socket', function (socketFactory) {
    var myIoSocket = io.connect('http://127.0.0.1:3000');

    mySocket = socketFactory({
        ioSocket: myIoSocket
    });

    return mySocket;
})