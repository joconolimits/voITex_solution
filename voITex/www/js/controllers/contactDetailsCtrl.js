app.controller('contactDetailsCtrl', function ($scope, $stateParams, phoneBookFactory, $ionicScrollDelegate, $ionicSlideBoxDelegate) {
    //$scope.chat = Chats.get($stateParams.chatId);
    console.log("in contact Details ctrl");
    //alert("the id in the controller: " + $stateParams.chatId);
    $scope.contact = phoneBookFactory.get($stateParams.chatId);



    // needed for the display of the view
    $ionicSlideBoxDelegate.update();
    $scope.onUserDetailContentScroll = onUserDetailContentScroll
    $scope.like = like

    function like() {
        $scope.liked = true
    }

    function onUserDetailContentScroll() {
        var scrollDelegate = $ionicScrollDelegate.$getByHandle('userDetailContent');
        var scrollView = scrollDelegate.getScrollView();
        $scope.$broadcast('userDetailContent.scroll', scrollView);
    }
})