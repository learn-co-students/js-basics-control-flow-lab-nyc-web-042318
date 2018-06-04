// Write your code in this file!
function scuberGreetingForFeet(value) {
  let message;
    if (value <= 400) {
    message = "This one is on me!"
  } else if (value <= 2500 && value > 2000) {
    message = "I will gladly take your thirty bucks."
  } else if (value > 2500) {
    message = "No can do."
  }
  return message;
}

function ternaryCheckCity(city) {
  let message;
  city === 'NYC' ? message = 'Ok, sounds good.' : message = 'No go.'
  return message;
}



function switchOnCharmFromTip(tip) {
  let message;
  if (tip === 'generous'){
    message = 'Thank you so much.';
  } else if (tip === 'not as generous'){
    message = 'Thank you.';
  } else message = 'Bye.';
  return message;
}
