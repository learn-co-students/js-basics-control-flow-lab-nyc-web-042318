// Write your code in this file!

function scuberGreetingForFeet(distance) {
  let result;
  if (distance <= 400) {
    result = 'This one is on me!';
  } else if (distance > 2000 && distance < 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    result = 'No can do.'
  }
  return result;
}

function ternaryCheckCity(city) {
  let result = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return result;
}

function switchOnCharmFromTip(tip) {
  let reply;
  switch (true) {
    case (tip === 'generous') :
      reply = 'Thank you so much.';
      break;
    case (tip === 'not as generous') :
      reply = 'Thank you.';
      break;
    default :
      reply = 'Bye.'
      break;
  }
  return reply;
}
