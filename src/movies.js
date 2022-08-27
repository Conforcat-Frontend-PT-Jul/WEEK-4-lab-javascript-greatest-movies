// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {    
    return moviesArray.map((moviesArray) => moviesArray.director);  
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    //if (moviesArray.director = 'Steven Spielberg' && moviesArray.genre = 'Drama')
    return moviesArray.filter((movies) => {
        const spielbergMovie = movies.director === "Steven Spielberg"; 
        const dramaMovie = movies.genre.includes("Drama");
        return spielbergMovie && dramaMovie;
}).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let addition = moviesArray.reduce((accumulator, currentValue) =>
    accumulator += currentValue.score || 0 ,0);
    return Number((addition / moviesArray.length).toFixed(2));
    }
 
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const draMovArr = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama"); 
    })
    let averageScore = scoresAverage(draMovArr);
    return averageScore
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMovArr = [...moviesArray]; //asi se clona un array
    newMovArr.sort((older, newer) => {
        if (older.year < newer.year) {
            return -1;
        } else if (older.year > newer.year){
            return 1;
        } else {
            return older.title.localeCompare(newer.title);
        }
    });
    return newMovArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const otherMovArr = moviesArray.map((moviesArray) => moviesArray.title);
    otherMovArr.sort((first, second) => first.localeCompare(second));
    const listOfTitles = otherMovArr.slice(0, 20);
    return listOfTitles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
