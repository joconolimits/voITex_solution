//Author Jordan 
appServices.factory('callListFactory', ['$q', function ($q) {
    console.log("Factory 1");
        return {

            list: function (days) {
                //console.log("Factory 2");
                var q = $q.defer();
                // days is how many days back to go
                document.addEventListener("deviceready", onDeviceReady, false);
                function onDeviceReady() {
                    window.plugins.calllog.list(days, function (response) {
                        q.resolve(response.rows);
                        console.log("window.plugins.calllog gives: " + q.resolve(response.rows));
                    }, function (error) {
                        q.reject(error)
                    });
                }
                return q.promise;
            },

            contact : function(phoneNumber) {
                var q = $q.defer();
                window.plugins.calllog.contact(phoneNumber, function (response) {
                    q.resolve(response);
                }, function (error) {
                    q.reject(error)
                });
                return q.promise;
            },

            show : function(phoneNumber) {
                var q = $q.defer();
                window.plugins.calllog.show(phoneNumber, function (response) {
                    q.resolve(response);
                }, function (error) {
                    q.reject(error)
                });
                return q.promise;
            }
        }
    }])