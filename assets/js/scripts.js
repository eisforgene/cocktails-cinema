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
    .then(function(result) {
       return result.json();
    })
    .then(function(result) {
        console.log(result);
        const cocktails = result.drinks[0].strDrinkThumb;

        const reponseCardEl = document.querySelector('.cocktail-btn');
        responseCardEl.innerHTML = '<button>' + cocktails + '</button>'
        cocktails.forEach(function(cocktail) {
            displayCocktails(cocktail);
        }); 
    })
}

function displayCocktails(cocktails) {
    let searchTerm = cocktails.drinks[0].strDrinkThumb// cocktail array of results
    // create element with cocktail info
    // query selector parent element
    // append cocktail element to parent

}

function selectCocktail(cocktail) { // select cocktails -- do stuff

}

function displayMovie() {

}




