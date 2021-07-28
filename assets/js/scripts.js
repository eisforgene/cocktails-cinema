
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
            console.log(result.drinks);

            for (let i=0;i<3;i++) {
                const cocktailCard = document.createElement('div');
                cocktailCard.setAttribute('class', 'cocktail-card');

                const header = document.createElement('h2');
                header.textContent = result.drinks[i].strDrink;

                const img = document.createElement('img');
                img.setAttribute('src', result.drinks[i].strDrinkThumb);
                img.setAttribute('alt', result.drinks[i].strDrink);
                
                cocktailCard.appendChild(header);
                cocktailCard.appendChild(img);

                document.querySelector('#cocktail-answer').appendChild(cocktailCard);
            }
           
            // const cocktails = result.drinks[0];
            // let cocktailDisplay = document.querySelector('#cocktail-answer');
            // let cocktailImage = document.createElement('img'); 
            
            // cocktailImage.setAttribute('src', cocktails.strDrinkThumb);

            // cocktailDisplay.appendChild(cocktailImage);
            // displayCocktails(cocktails);
           
        })
}

// make pictures into buttons
// display titles // ingredients
// hide previous container after cocktails visible
// show all cocktails in each container simultaneously
// breaksize for images

function displayCocktails(cocktails) {

    // cocktail array of results

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