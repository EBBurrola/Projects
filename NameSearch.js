// Text Search for Name on Codecademy
// Needs refactoring- not functioning properly, but passed.


/*jshint multistr:true */

var text = "I just read a book by Ericka. In this book, Ericka talks about blah blah blah. I really think Ericka's new book is great.";
var myName = "Ericka";
var hits = [];

for (i = 0; i< text.length; i++) {
   if (text[i] === myName[0]) {
    for (j = i; j <= i + myName.length; j++) {
        if (text[i] === myName[i]) {
            hits.push(text[j]);
        };
    };
   }; 
};
if (hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
};