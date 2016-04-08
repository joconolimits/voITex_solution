//Author Jordan
'use strict';

appServices.factory('inCallFactory', ['$rootScope', 'socket', function ($rootScope, socket) {
    
    return {
        //beagining of Annyang block
        startCall: function () {
            $rootScope.callText = '';
            var commands = {
                '*val': function (val) {
                    $rootScope.callText += "\n" + val;
                    //Send the annyang text to the backend 
                    socket.emit('voitexMessage', val);
                    //Show the annyang text to the view
                    $('#call_text').animate({
                        scrollTop: $('#call_text').get(0).scrollHeight
                    }, 7000);
                    $rootScope.$apply();
                }

            } // end commands
            annyang.addCommands(commands);
            annyang.setLanguage('sr');
            annyang.debug();

            // Start listening. You can call this here, or attach this call to an event, button, etc.
            annyang.start();
            
            
        },//end startCall

        stopCall: function () {
            console.log("I don't listen");
            annyang.abort();

        }//end stopCall

        //end of Annyang block

    };//end return
}])//end factory