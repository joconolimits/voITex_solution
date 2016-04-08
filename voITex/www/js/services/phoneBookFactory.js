appServices.factory('phoneBookFactory', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    // Get the phone  contacts
    var phoneContacts = [];
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        navigator.contacts.find(
        [navigator.contacts.fieldType.displayName],
        gotContacts,
        errorHandler);

    }

    function errorHandler(e) {
        console.log("errorHandler: " + e);
    }

    function gotContacts(c) {
        console.log("gotContacts, number of results " + c.length);
        for (var i = 0, len = c.length; i < len; i++) {
            console.dir(c[i]);
            var contact = c[i];
            phoneContacts.push(contact);
        }
    }

    return {
        all: function () {
            return phoneContacts;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            //alert("the ID in the service: "+ chatId)
            for (var i = 0; i < phoneContacts.length; i++) {
                if (phoneContacts[i].id === chatId) {
                    console.log("The  found contact details");
                    console.log(phoneContacts[i]);
                    return phoneContacts[i];
                }
            }
            return null;
        }
    };
})
