
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
                const cocktails = result.drinks[i];
                const cocktailCard = document.createElement('div');
                cocktailCard.setAttribute('class', 'cocktail-card'); // (attribute, value)

                const header = document.createElement('h2');
                header.textContent = cocktails.strDrink;

                const img = document.createElement('img');
                img.setAttribute('src', cocktails.strDrinkThumb);
                img.setAttribute('alt', cocktails.strDrink);
                
                cocktailCard.appendChild(header);
                cocktailCard.appendChild(img);

                document.querySelector('#cocktail-answer').appendChild(cocktailCard);
            }
            displayCocktails(cocktails);

        })
};

// make pictures into buttons (event listener --> direct choice to produce random movie image
// prevent clicking other buttons after clicking one to prevent more images showing
// hiding container by using a callback function after the appropriate section

// breaksize for images
// center titles
// basic styling

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
<<<<<<< HEAD
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
 });
// function movieChoice() {
//     document.querySelectorAll(".movie-btn", el.click()); //calls movie image 
//     //let movieTitle = 
//     //when image comes up it is clickable to go to amazom 
//     //https:www.amazom.com/s=movieTitle 
// };
   
    //WTF is going on
    
=======

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
>>>>>>> 30eeda356877303f885d4b913c5b7725d64c7622
