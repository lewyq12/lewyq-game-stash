function getRandomGreeting() {
  var greetings = [
    "Carson Kheller is a bot",
    "Sam Cramlet yes king",
    "e dicki",
    "Your welcome",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
