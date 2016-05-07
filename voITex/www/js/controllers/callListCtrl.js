app.controller('callListCtrl', function ($scope, callListFactory) {
    console.log("In callListCtrl");

    //Togle the action buttons bar.
    $scope.hasBtnsBar;
    $scope.toggleBtnsBar = function (hasBtnsBar) {
        $scope.hasBtnsBar = hasBtnsBar;
        if (hasBtnsBar) $scope.hasBtnsBar = false;
        else $scope.hasBtnsBar = true;
    }

    $scope.data = {};
    $scope.callTypeDisplay = function(type) {
        switch(type) {
            case 1:
                return 'Incoming';
            case 2:
                return 'Outgoing';
            case 3:
                return 'Missed';
            default:
                return 'Unknown';
        }
    };

    //document.addEventListener("deviceready", onDeviceReady, false);
    //function onDeviceReady() {
    //    window.plugins.calllog.list(7, function (response) {
    //        console.log("I got response from The plugin");
    //        console.log("The response is: " + response);
    //        console.log("The response is 2 : " + response.rows);
    //    }, function (error) {
    //        console.log("I got Error from The plugin");
    //    });
    //}

    /*
    **Load the data
    **The method receives the Number of days for the log
    */
    callListFactory.list(7).then(
            function (callLog) {
                console.log(callLog);
                $scope.data.lastCall = callLog[0];
                $scope.data = callLog;
                console.log("the Call: " +callLog[0]);
            },
            function (error) {
                console.error(error);
            });


})