//VARIABLES

var letsCookButton = document.querySelector(".cook-button");
var cookPot = document.querySelector(".cookpot");
var randomDish = document.querySelector(".randomDish");
var suggestADish = document.querySelector(".suggestion-div");
var clearButton = document.querySelector(".clear-button");

var selection = '';
var radios = document.getElementsByTagName('input');
var checked = null;

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function() {
        if (this !== checked) {
            selection = this.value
            letsCookButton.disabled = false;
        }
    });
}

//EVENT LISTENERS
letsCookButton.addEventListener("click", getRandomDish);
clearButton.addEventListener("click", clearSuggestion);


//FUNCTIONS
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomDish() {

  var randomSelection = '';
  var sideDish = '';
  var mainDish = '';
  var dessert = '';

  if (selection == 'side') {
    randomSelection = getRandomElement(sides);
  } else if (selection == 'main-dish') {
    randomSelection = getRandomElement(mains);
  } else if (selection == 'dessert') {
    randomSelection = getRandomElement(desserts);
  } else if (selection == 'entire-meal') {
        mainDish = getRandomElement(mains);
        sideDish = getRandomElement(sides);
        dessert = getRandomElement(desserts);
        randomSelection = `${mainDish} with a side of ${sideDish} and ${dessert} for dessert`
    }
    else if (selection !== null) {
      element.disabled = false
    }
  hideCookPot();
  showSuggestion();
  randomDish.innerText = `${randomSelection}!`;
}

function hideCookPot() {
  cookPot.classList.add('hidden');
}

function showSuggestion() {
  suggestADish.classList.remove('hidden');
}

function clearSuggestion() {
  suggestADish.classList.add('hidden');
  cookPot.classList.remove('hidden');
}
