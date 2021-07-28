let liquorChoice = document.getElementById('answer-buttons');

document.querySelector('#cocktail-answer').addEventListener('click', function(event) {
   
    console.log(event);

    if (event.target.matches('img')) {
        // alert('image clicked');
        movieSearch();
    }
})

liquorChoice.addEventListener('click', liquorSelection); // call liquorSelection after click

function liquorSelection(event) {
    event.preventDefault();
    console.log(event.target.value); // target value within the button
    const liquorAnswer = event.target .value; // store value in const variable
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

            document.querySelector('#cocktail-answer').innerHTML = '';

            for (let i = 0; i < 3; i++) {
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
        })
};

function selectCocktail() { // select cocktails -- do stuff
    let cocktailChoice = document.getElementById('.cocktail-card');

    cocktailChoice.addEventListener('click', movieSearch())
};

function displayMovie() {
    main
}

// function selectAnswer() {
//     console.log('Whiskey');
// };
//Function to build out movie selection

function movieSearch() {
    fetch(`http://www.omdbapi.com/?apikey=1c8371fd&s=action`)
      
        //change s=action to s=${liquorSelection}
        .then(function (movieRes) {
            return movieRes.json();
        }).then(function (movieData) {
            console.log(movieData);

            for (var i = 0; i <= 0; i++) {
                console.log(movieData.Search[i].Title);
                
                let randomIndex = Math.floor(Math.random()*10) // floor is to round down

                let movieCard = document.createElement("div");
                movieCard.setAttribute('class', 'movie-card'); //sets attrubut for movie 
                
                let header = document.createElement('h3'); //sets the movie title on page 
                header.textContent = movieData.Search[randomIndex].Title;

                movieCard.appendChild(header);

                document.querySelector('#movie-title').appendChild(movieCard);
                
                var desiredLink = href="https://www.amazon.com";
                let a = document.createElement('movie-link');
                    a.setAttribute('href', desiredLink);
                    a.innerHTML = "Your Perfect Movie";
                    // apend the anchor to the body
                    // of course you can append it almost to any other dom element
                
                    document.getElementsByTagName('h4')[0].innerHTML += '<a href="'+desiredLink+'">'+ `Your Perfect Movie` + '</a>';
            };
        });
};

    //WTF is going on

// Eugene Notes for to-do:
// make pictures into buttons (event listener --> direct choice to produce random movie image
// prevent clicking other buttons after clicking one to prevent more images showing
// hiding container by using a callback function after the appropriate section

// breaksize for images
// center titles
// basic styling: hover on cocktail card, transition? 

