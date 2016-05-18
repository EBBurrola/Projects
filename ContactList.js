/* 

Contact List from Codecademy

*/

var friends = new Object();
friends.bill = {
    firstName: 'Bill', 
    lastName: 'Gates', 
    number: 5551234567, 
    address: ['1000 Microsoft Way', 'Silicon Valley, CA 12345']
};
friends.steve = {
    firstName: 'Steve', 
    lastName: 'Jobs', 
    number: 55599877655,
    address:['2000 Apple Drive', 'Silicon Valley, CA 98765']
};

var list = function() {
    for (var key in friends) {
        console.log(key);
    };
};
    
var search = function(name) {
    for (var key in friends) {
        if (name === friends[key].firstName) {
            console.log(friends[key]);
            return friends[key];
        } else {
            console.log("Could not find a matching name.")
        };
    };
};