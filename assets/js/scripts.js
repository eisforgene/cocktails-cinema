// feature/moviejs
//let Liquor = document.getElementById('liquor');
//let tequila 
//let gin
//let 
 
// fetch(`http://www.omdbapi.com/?apikey=1c8371fd&i=tt0241527&s=${liquor}`)
//     .then(function (movieRes){
//         return movieRes.json();
//     }).then(function(movieData) {
//         console.log(movieData)
//     });

  
let liquorChoice = document.getElementById('answer-buttons');
// let questionContainerEl = document.getElementById('liquor-container');
// let refreshBtn = document.querySelector('restart-btn');

// object.addEventListener(event, function)
liquorChoice.addEventListener('click', liquorSelection); // call liquorSelection after click

function liquorSelection(event) {
    event.preventDefault(); 
    console.log(event.target.value); // target value within the button
}

function cocktailSelection() {

}

function displayMovie() {

}






// liquo.addEventListener('click', liquorSelection);

// function liquorSelection(event) {
//     console.log(target);
//     console.log(type);
// }

// liquorAnswer.addEventListener('click', selectAnswer);

// function selectAnswer() {
//     console.log('Whiskey');
// };


