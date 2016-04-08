app.controller('inCallCtrl', function ($scope, $stateParams, $state, $ionicHistory, $urlRouter, inCallFactory, phoneBookFactory) {
    console.log("in the inCallCtrl");
    console.log("the user id: " + $stateParams.userId);
    console.log("the number id: " + $stateParams.numberId);

    //get the contact that we are calling
    $scope.user = phoneBookFactory.get($stateParams.userId);
    // get the corect phone number of the contact we are calling
    //for (var i = 0; i < $scope.user.phoneNumbers.length; i++) {
    //    if ($scope.user.phoneNumbers[i].id == $stateParams.numberId) {
    //        $scope.number = $scope.user.phoneNumbers[i].value;
    //    }//end if
    //}//end for

    // The block to initiate a phone call through the device. You need to install the call Number plugin first 
    //var bypassAppChooser = true;
    //window.plugins.CallNumber.callNumber(function () {
    //    //success logic goes here
    //}, function () {
    //    //error logic goes here
    //}, $scope.number, bypassAppChooser);

    //start converting text 
    inCallFactory.startCall();
     
    //end the call
    $scope.stopCall = function () {
        inCallFactory.stopCall()
        //after call ended return one state back to the profile
        $ionicHistory.goBack(-1);
    }//end stopCall method

})