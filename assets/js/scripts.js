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
