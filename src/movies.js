// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors (arr) {
    return arr.map(item => item.director)
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    return moviesArray.filter(({director, genre}) => 
    (genre.includes("Drama") && director === "Steven Spielberg")).length;
  }



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// reduce the data to a single value. the score must be rounded to 2 decimals./display a la consola

/*function scoresAverage(moviesArray) {
    return moviesArray.reduce(function(avg, score) {
movies.score;
    }

}*/

function scoresAverage(moviesArray) {
    if (!moviesArray.length){
        return 0;
    }
    const totalScore = moviesArray.reduce((acc, movie)=> acc += movie.score || 0, 0)
    return Number((totalScore/moviesArray.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(({genre}) => genre.includes("Drama"));
    return ((dramaMovies/moviesArray.length).toFixed(2))


}

/*
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(({ genre }) => genre.includes("Drama"));
    return ratesAverage(dramaMovies);
  }*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
