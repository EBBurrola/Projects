/* 

Code Your Own Adventure 2 Game from Codecademy

*/

var user = prompt("You are at home coding and the phone rings. What do you do--PICK UP, HANG IT UP, or SEND TO VOICEMAIL?").toUpperCase();

switch (user) {
    case 'PICK UP':
        var response1 = prompt("Do you know this person?","YES or NO").toUpperCase();
        if (user === 'PICK UP' && response1 === 'YES') {
            console.log('You say thanks! They ask you out for dinner and a movie.');
        } else {
            console.log('You throw the phone and go soak in the tub.');
        };
        break;
    case 'HANG IT UP':
        var response2 = prompt("What do you do next-- CALL THE NUMBER BACK, UNPLUG THE PHONE, or CALL YOUR MOM?").toUpperCase();
        if (response2 ==='CALL THE NUMBER BACK' || response2 === 'CALL YOUR MOM') {
            console.log("I think you've had enough phone time for today. Don't you agree?");
        } else {
            console.log("Go soak in the tub. You deserve it.")
        };
        break;
    case 'SEND TO VOICEMAIL':
        console.log("Good decision. It was a telemarketer.");
        break;
    default:
        console.log("Rebel without a cause, huh?");
};