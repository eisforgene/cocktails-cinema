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
const restartButton = document.querySelector('.restart-btn');

// let questionContainerEl = document.getElementById('liquor-container');
// let refreshBtn = document.querySelector('restart-btn');

// object.addEventListener(event, function)
liquorChoice.addEventListener('click', liquorSelection); // call liquorSelection after click
restartButton.addEventListener('click', restartPage);

function liquorSelection(event) {
    event.preventDefault();  
    console.log(event.target.value); // target value within the button
    const liquorAnswer = event.target.value; // store value in const variable
    const urlString = `www.thecocktaildb.com/api/json/v1/1/search.php?i=${liquorAnswer}`; // create API string
    getCocktails(urlString); // invoke/call function with urlString as a parameter/argument
}

function getCocktails(urlString) { //call function with urlString as parameter from liquorSelection();
    fetch(urlString) 
    .then(function(result) {
       return result.json();
    })
    .then(function(data) {
        console.log(data);
        data.cocktails
        const cocktails = data.result;
        cocktails.forEach(cocktail => displayCocktails(cocktail));
        displayCockatails(cocktails)
    })
}

function displayCocktails(cocktails) {
    // cocktail array of results
    // create element with coctail info
    // query selector parent element
    // append cocktail element to parent

}

function selectCocktail(cocktail) { // select cocktails -- do stuff
}

function displayMovie() {

}

function restartPage(event) {
    event.preventDefault();

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


