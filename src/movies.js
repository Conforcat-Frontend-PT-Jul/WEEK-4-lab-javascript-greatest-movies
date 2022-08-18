// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;

    const scores = moviesArray.map(movie => {
        if (typeof movie.score !== 'number') return 0;
        return movie.score;
    });

    const sumAllScores = scores.reduce((acc, val) => acc + val);

    const averageAllScores = sumAllScores/scores.length;

    return Number( averageAllScores.toFixed(2) );
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    
    if (!dramaMovies.length) return 0;

    const scores = dramaMovies.map(movie => movie.score);

    const sumAllScores = scores.reduce((acc, val) => acc + val);

    const averageAllScores = sumAllScores/scores.length;

    return Number( averageAllScores.toFixed(2) );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderAsc(a, b) {
    if (a.year === b.year) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    }
    return a.year - b.year;
}
function orderByYear(moviesArray) {
    return [...moviesArray].sort(orderAsc);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
