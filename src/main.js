// var radios = document.getElementsByTagName('input');
// var value;
// for (var i = 0; i < radios.length; i++) {
//     if (radios[i].type === 'radio' && radios[i].checked) {
//         // get value, set checked flag or do whatever you need to
//         value = radios[i].value;
//         console.log(value)
//     }
// }

//VARIABLES
var side = document.querySelector(".side");
var mainDish = document.querySelector(".main-dish");
var dessert = document.querySelector(".dessert");
var entireMeal = document.querySelector(".entire-meal");

var letsCookButton = document.querySelector(".cook-button");

var randomDish = document.querySelector(".randomDish");

//EVENT LISTENERS
letsCookButton.addEventListener("click", getRandomFoods)


//FUNCTIONS