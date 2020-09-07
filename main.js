// var radios = document.getElementsByTagName('input');
// var value;
// for (var i = 0; i < radios.length; i++) {
//     if (radios[i].type === 'radio' && radios[i].checked) {
//         // get value, set checked flag or do whatever you need to
//         value = radios[i].value;
//         console.log(value)
//     }
// }


var side = document.querySelector(".side");
var mainDish = document.querySelector(".main-dish");
var dessert = document.querySelector(".dessert");
var entireMeal = document.querySelector(".entire-meal");
var letsCook = document.querySelector(".cook-button");

letsCook.addEventListener("click", function(){
    console.log("clicked");
});
