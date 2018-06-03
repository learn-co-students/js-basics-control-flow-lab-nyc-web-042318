// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let response
  let cost
  if (someValue <= 400) {
    response = "This one is on me!";
  }
  else if (someValue > 2000 && someValue < 2500) {
    response = "I will gladly take your thirty bucks.";
  }
  else if (someValue > 2500) {
    response = "No can do.";
  }
  return response
}

function ternaryCheckCity(city) {
  let response;
  city === "NYC" ? response = "Ok, sounds good." : response = "No go."
  return response;
}

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case "generous":
      response = "Thank you so much.";
      break
    case "not as generous":
      response = "Thank you.";
      break
    default:
      response = "Bye.";
  }
  return response
}
