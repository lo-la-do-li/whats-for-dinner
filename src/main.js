

//VARIABLES

var letsCookButton = document.querySelector(".cook-button");

var randomDish = document.querySelector(".randomDish");

// var inputs = document.getElementsByTagNamatome('input');
//
// for(var i = 0; i < inputs.length; i++) {
//     if(inputs[i].checked) {
//         alert(inputs[i].value);
//     }
// }

//EVENT LISTENERS
letsCookButton.addEventListener("click", getRandomDish);


var selection = '';
var rad = document.getElementsByTagName('input');
var prev = null;

for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        (prev) ? console.log(prev.value): null;
        if (this !== prev) {
            selection = this.value
            letsCookButton.disabled = false;
        }
    });
}


//FUNCTIONS
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomDish() {
  // var inputs = document.getElementsByTagName('input');
  // var selection = '';
  var randomSelection = '';
  var sideDish = '';
  var mainDish = '';
  var dessert = '';
  // for(var i = 0; i < inputs.length; i++) {
  //   if(inputs[i].checked) {
  //     selection = inputs[i].value;
  //   }
  // }

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
  randomDish.innerText = `${randomSelection}!`;
}

// function showRandomDish() {
//   getRandomDish();
//   randomDish.innerText = `${}!`;
//   hideCookpot();
//   uncheckRadioButton();
// }
