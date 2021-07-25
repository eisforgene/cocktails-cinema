feature/moviejs
//let Liquor = document.getElementById('liquor');
//let tequila 
//let gin
//let 
 
fetch(`http://www.omdbapi.com/?apikey=1c8371fd&i=tt0241527&s=${liquor}`)
    .then(function (movieRes){
        return movieRes.json();
    }).then(function(movieData) {
        console.log(movieData)
    });


  
let liquorChoice = document.getElementById('answer-buttons');
let liquorContainerEl = document.getElementById('liquor-selection');
let questionContainerEl = document.getElementById('question-container');

// object.addEventListener(event, function)
liquorChoice.addEventListener('click', liquorSelection); // call liquorSelection after click

function liquorSelection() {
    console.log('Started');
}

function cocktailSelection () {

}

function restart () {

}

function displayMovie () {

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


