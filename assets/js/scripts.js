
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
//Function to build out movie selection
//function movieSearch( ){
fetch(`http://www.omdbapi.com/?apikey=1c8371fd&s=action`)
    //change s=action to s=${liquorSelection}
    .then(function (movieRes) {
        return movieRes.json();
    }).then(function (movieData) {
        console.log(movieData);
        for (var i = 0; i < 6; i++) {
            console.log(movieData.Search[i].Title);

            let header = document.createElement('h2');
            let movieTitle = movieData.Search[i].Title;


            let movieCard = document.createElement("div");
            movieCard.setAttribute('class', 'movie-card'); //sets attrubut for movie 

            let movieImg = document.createElement('movieImg')
            //movieImg.setAttribute = //src 
            //movieImg.setAttribute = // alt

        
    };

// function movieChoice() {
//     document.querySelectorAll(".movie-btn", el.click()); //calls movie image 
//     //let movieTitle = 
//     //when image comes up it is clickable to go to amazom 
//     //https:www.amazom.com/s=movieTitle 
// };
    });