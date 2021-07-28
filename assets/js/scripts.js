
let liquorChoice = document.getElementById('answer-buttons');

liquorChoice.addEventListener('click', liquorSelection); // call liquorSelection after click

function liquorSelection(event) {
    event.preventDefault();
    console.log(event.target.value); // target value within the button
    const liquorAnswer = event.target.value; // store value in const variable
    const urlString = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquorAnswer}`; // create API string
    getCocktails(urlString); // invoke/call function with urlString as a parameter/argument
}


function getCocktails(urlString) { //call function with urlString as parameter from liquorSelection();
    fetch(urlString)
        .then(function (result) {
            return result.json();
        })
        .then(function (result) {
            console.log(result.drinks[0]);
           
            const cocktails = result.drinks[0];
            let cocktailDisplay = document.querySelector('#cocktail-answer');
            let cocktailImage = document.createElement('img'); 
            
            cocktailImage.setAttribute('src', cocktails.strDrinkThumb);

            cocktailDisplay.appendChild(cocktailImage);
            
            


            // const reponseCardEl = document.querySelector('.cocktail-btn');
            // responseCardEl.innerHTML = '<button>' + cocktails + '</button>'
            // cocktails.forEach(function (cocktail) {
            //     displayCocktails(cocktail);
            // });
        })
}

function displayCocktails(cocktails) {
    let searchTerm = cocktails.drinks[0].strDrinkThumb// cocktail array of results
    
    let cocktailDisplay = document.querySelector('.answer-buttons');
    cocktailDisplay.innerHTML = " ";
    cocktailDisplay.appendChild();
    
    // create element with cocktail info
    // query selector parent element
    // append cocktail element to parent

}

function selectCocktail(cocktail) { // select cocktails -- do stuff
}

function cocktailSelection() {

}

function restart() {

}

function displayMovie() {
    main

}

// function selectAnswer() {
//     console.log('Whiskey');
// };
//Function to build out movie selection
//function movieSearch( ){

function movieSearch() {
    fetch(`http://www.omdbapi.com/?apikey=1c8371fd&s=action`)
        //change s=action to s=${liquorSelection}
        .then(function (movieRes) {
            return movieRes.json();
        }).then(function (movieData) {
            console.log(movieData)
            for (var i = 0; i > 6; i++) {
                console.log(movieData.search.search[i].title)
                console.log(movieData.search[i].Poster)
            }
        });
    function movieChoice() {
        document.querySelectorAll(".movie-btn", el.click()); //calls movie image
        //let movieTitle =
        //when image comes up it is clickable to go to amazom
        //https:www.amazom.com/s=movieTitle
    }
};