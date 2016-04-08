app.controller('favoritesCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };


    $scope.deviceInfo = function () {

        var deviceInfo = cordova.require("cordova/plugin/DeviceInformation");
        deviceInfo.get(function (result) {
            console.log("result = " + result);
        }, function () {
            console.log("error");
        });


    }

});
