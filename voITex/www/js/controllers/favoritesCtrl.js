app.controller('favoritesCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };

    $scope.owner;
  $scope.deviceInfo = function () {

        var deviceInfo = cordova.require("cordova/plugin/DeviceInformation");
        deviceInfo.get(function (result) {
            console.log("result = " + result);
            $scope.owner = angular.fromJson( result );
        }, function () {
            console.log("error");
        });


 }

});
