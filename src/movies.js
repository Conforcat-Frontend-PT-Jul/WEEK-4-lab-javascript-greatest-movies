// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const pelisBuenas = moviesArray.map((movies) => {
        return movies.director;
    });
    return pelisBuenas;
}

/* const multipliedDirectors = moviesArray.filter((director, index) => {
});
    return multipliedDirectors; */

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let busca = moviesArray.filter(element => element.genre.includes("Drama") && element.director === "Steven Spielberg")
    return busca.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let total = (element) =>{
        if(!element.score){
            return 0
        }
        return element.score
    }
    let average = moviesArray.reduce((x, y) =>{
        x += total(y) / moviesArray.length
        return x
    },0 )
    return Number(average.toFixed(2))
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'))
    const sumDrama = dramaMovies.reduce((sum, movie) => {
      if (dramaMovies.length > 0) {
        return sum + movie.score;
      } else
        return sum;
    }, 0);
    if (moviesArray.length > 0) {
        const promedio = sumDrama / dramaMovies.length
        return Math.abs(promedio.toFixed(2))
      } else {
        return 0
      }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
