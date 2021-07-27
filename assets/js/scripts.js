
let liquorChoice = document.getElementById('answer-buttons');
let liquorContainerEl = document.getElementById('liquor-selection');
let questionContainerEl = document.getElementById('question-container');

// object.addEventListener(event, function)
liquorChoice.addEventListener('click', liquorSelection); // call liquorSelection after click

function liquorSelection() {
    console.log('Started');
}

function cocktailSelection() {

}

function restart() {

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
function movieSearch( ){
fetch(`http://www.omdbapi.com/?apikey=1c8371fd&s=action`)
    .then(function (movieRes) {
        return movieRes.json();
    }).then(function (movieData) {
        console.log(movieData)
        for (var i = 0; i > 6 ; i++){
            console.log(movieData.search[i].title)
        }
    });
    //let movieTitle = 
}