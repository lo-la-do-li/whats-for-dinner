

//VARIABLES
// var side = document.querySelector(".side");
// var mainDish = document.querySelector(".main-dish");
// var dessert = document.querySelector(".dessert");
// var entireMeal = document.querySelector(".entire-meal");

var letsCookButton = document.querySelector(".cook-button");

var randomDish = document.querySelector(".randomDish");

// var inputs = document.getElementsByTagName('input');
//
// for(var i = 0; i < inputs.length; i++) {
//     if(inputs[i].checked) {
//         alert(inputs[i].value);
//     }
// }

//EVENT LISTENERS
letsCookButton.addEventListener("click", getRandomDish);


//FUNCTIONS
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomDish() {
  var inputs = document.getElementsByTagName('input');
  var selection = ''
  for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].checked) {
      selection = inputs[i].value;
    }
  }

  var randomSelection = ''
  if (selection == 'side') {
    randomSelection = getRandomElement(sides);
  } else if (selection == 'main-dish') {
    randomSelection = getRandomElement(mains);
  } else if (selection == 'dessert') {
    randomSelection = getRandomElement(desserts);
  }
  randomDish.innerText = `${randomSelection}!`;
}

// function showRandomDish() {
//   getRandomDish();
//   randomDish.innerText = `${}!`;
//   hideCookpot();
//   uncheckRadioButton();
// }
