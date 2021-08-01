let liquorChoice = document.getElementById('answer-buttons');
let moviesIndex = ["Action", "Comedy", "Drama", "Sci-Fi"]
let movieCat = ""
let previousSpirits = JSON.parse(localStorage.getItem('spirit')) || [];
let previousMovies = JSON.parse(localStorage.getItem('movie')) || [];
let liquorContainer = document.getElementById('liquor-container');

renderPreviousSelections();

document.querySelector('#cocktail-answer').addEventListener('click', function (event) {
    console.log(event);
    let title = this.getAttribute("data-title");
    console.log(this);

    if (event.target.matches('img')) {
        // alert('image clicked');
        movieSearch();
    };    
});

liquorChoice.addEventListener('click', liquorSelection); // call liquorSelection after click

function liquorSelection(event) {
    event.preventDefault();
    console.log(event.target.value); // target value within the button

    const liquorAnswer = event.target.value; // store value in const variable
    const urlString = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquorAnswer}`; // create API string
    getCocktails(urlString, event.target.value); // invoke/call function with urlString as a parameter/argument

    if (liquorAnswer == 'whiskey') {
        movieCat = 'Action'
    } else if (liquorAnswer == 'tequila') {
        movieCat = 'Comedy'
    } else if (liquorAnswer == 'gin') {
        movieCat = 'Drama'
    } else if (liquorAnswer == 'vodka') {
        movieCat = 'Sci-fi'
    }
    // movieSearch();

    previousSpirits.push(liquorAnswer)
    localStorage.setItem('spirit', JSON.stringify(previousSpirits));
};

liquorChoice.addEventListener('click', hideContainer)

function hideContainer () {
    if (liquorContainer.style.display !== 'none') {
        liquorContainer.style.display = 'none';
    } else { 
        liquorContainer.style.display = 'block';
    }
};



function getCocktails(urlString, drinkType) { // call function with urlString as parameter from liquorSelection();
    fetch(urlString)
        .then(function (result) {
            return result.json();
        })
        .then(function (result) {
            console.log(result.drinks);

            document.querySelector('#cocktail-answer').innerHTML = '';

            for (let i = 0; i < 3; i++) {

                if (drinkType !== 'whiskey') {
                    let array = result.drinks
                    let randomIndex = Math.floor(Math.random() * array.length)

                    var cocktails = result.drinks[randomIndex];

                } else {
                    var cocktails = result.drinks[i]
                }

                const cocktailCard = document.createElement('div');
                cocktailCard.setAttribute('class', 'cocktail-card'); // (attribute, value)

                const cocktailHeader = document.createElement('div');
                const cocktailImg = document.createElement('div');

                const header = document.createElement('h2');
                header.textContent = cocktails.strDrink;
                header.setAttribute('class', 'textTitle');

                const img = document.createElement('img');
                img.setAttribute('src', cocktails.strDrinkThumb);
                img.setAttribute('alt', cocktails.strDrink);
                img.setAttribute('class', 'img cursor imgDrink');
                img.setAttribute("id", i)
                img.setAttribute("data-title", cocktails.strDrink)


                cocktailHeader.appendChild(header);
                cocktailHeader.setAttribute('class', 'cocktailTitle');
                cocktailImg.appendChild(img);
                cocktailImg.setAttribute('class', 'cocktailImg');

                cocktailCard.appendChild(cocktailImg);
                cocktailCard.appendChild(cocktailHeader);

                document.querySelector('#cocktail-answer').appendChild(cocktailCard);
            }
        })
  

};

function movieSearch() {
    fetch(`https://www.omdbapi.com/?apikey=1c8371fd&s=${movieCat}`)

        //change s=action to s=${liquorSelection}
        .then(function (movieRes) {
            return movieRes.json();
        }).then(function (movieData) {
            console.log(movieData);

            for (var i = 0; i <= 0; i++) {
                console.log(movieData.Search[i].Title);

                let randomIndex = Math.floor(Math.random() * 10); // floor is to round down

                let movieCard = document.createElement("div");
                movieCard.setAttribute('class', 'movie-card'); //sets attribute for movie 

                let movieEle = document.getElementById("movie-link")
                let movieTitle = document.getElementById("movieCat")

                movieTitle.innerHTML = `<h4 id="movieHead">${movieData.Search[randomIndex].Title}</h4><p>Genre: ${movieCat}</p>`
                movieEle.innerHTML = `<a href="https://www.amazon.com/s?k=${movieData.Search[randomIndex].Title}"><img src="${movieData.Search[randomIndex].Poster}"/>`

                previousMovies.push(movieData.Search[randomIndex].Title)
                localStorage.setItem("movie", JSON.stringify(previousMovies));

                console.log(localStorage);
            };
        });
};

function renderPreviousSelections() { // append li item for each element in the previousSpirits []
    for (let i = 0; i < previousMovies.length; i++) {
        console.log(previousMovies[i]);
        const listItem = document.createElement('li');
        listItem.textContent = previousMovies[i];
        document.getElementById('movie-list').appendChild(listItem);
    }
    
    // for (let i = 0; i < previousSpirits.length; i++) { // iterate, evaluate, mutate
    //     console.log(previousSpirits[i]);
    //     const listItem = document.createElement('li');
    //     listItem.textContent = previousSpirits[i];
    //     document.getElementById('spirit-list').appendChild(listItem);
    // }
}



