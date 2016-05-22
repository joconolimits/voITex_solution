app.controller('inCallCtrl', function ($scope, $stateParams, $state, $ionicHistory, $urlRouter, inCallFactory, phoneBookFactory) {
console.log("in the inCallCtrl");
console.log("the user id: " + $stateParams.userId);
console.log("the number id: " + $stateParams.numberId);

    //get the contact that we are calling
    if ($stateParams.userId) {
        $scope.user = phoneBookFactory.get($stateParams.userId);
    } else if ($stateParams.userName) {
        $scope.user = {};
        $scope.user.displayName = $stateParams.userName;
console.log("the user name is: " + $stateParams.userName);
    }//endif

    // get the corect phone number of the contact we are calling
    if ($stateParams.numberId) {
        for (var i = 0; i < $scope.user.phoneNumbers.length; i++) {
            if ($scope.user.phoneNumbers[i].id == $stateParams.numberId) {
                $scope.number = $scope.user.phoneNumbers[i].value;
console.log("the number: " + $scope.number);
                break;
            }//end if
        }//end for
    } else if ($stateParams.number) {
        $scope.number = $stateParams.number;
console.log("the number: " + $scope.number);
    }//endif

    // The block to initiate a phone call through the device. You need to install the call Number plugin first 
    //var bypassAppChooser = true;
    //window.plugins.CallNumber.callNumber(function () {
    //    //success logic goes here
    //}, function () {
    //    //error logic goes here
    //}, $scope.number, bypassAppChooser);

    //start converting text 
    inCallFactory.startCall($scope.number);
     
    //end the call
    $scope.stopCall = function () {
        inCallFactory.stopCall()
        //after call ended return one state back to the profile
       var view = $ionicHistory.goBack(-1);
    }//end stopCall method

})