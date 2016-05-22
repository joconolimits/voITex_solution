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

    /*
    **Load the data
    **The method receives the Number of days for the log
    */
    var days = 7;
    callListFactory.list(days).then(
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