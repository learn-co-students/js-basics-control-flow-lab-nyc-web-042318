// Write your code in this file!

function scuberGreetingForFeet(num) {
    let result;
    num <= 400 ? result = 'This one is on me!' : false;
    num > 2000 ? result = 'I will gladly take your thirty bucks.' : false;
    num > 2500 ? result = 'No can do.' : false;

    return result;
}

function ternaryCheckCity(city) {
    let result;

    city === "NYC" ? result = 'Ok, sounds good.' : result = 'No go.';

    return result;

}

function switchOnCharmFromTip(tip) {
    switch (tip) {
        case 'generous':
            return 'Thank you so much.';
            break;
        case 'not as generous':
            return 'Thank you.';
            break;
        default:
            return 'Bye.';
            break;
    }
}
