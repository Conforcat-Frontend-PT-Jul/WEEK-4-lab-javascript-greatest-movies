// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(array => array.director);
    const allDirectorsOneTime = allDirectors.filter((element,index) => allDirectors.indexOf(element) === index);
    return allDirectorsOneTime;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielbergDramaMovies = moviesArray.filter(movies => (movies.director === 'Steven Spielberg') && (movies.genre.includes('Drama')));
    return stevenSpielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    
    moviesArray.forEach(element => {
        if (typeof element.score !== 'number') element.score = 0;
    });
  
    const totalScores = moviesArray.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
    const scoresMovieAvg = parseFloat((totalScores/moviesArray.length).toFixed(2));

    return scoresMovieAvg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movies => (movies.genre.length === 1 && movies.genre.includes('Drama')));

    if (!dramaMovies.length) return 0;

    const totalScoresDramaMovies = dramaMovies.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
    const dramaMoviesScoreAvg = parseFloat((totalScoresDramaMovies/dramaMovies.length).toFixed(2));

    return dramaMoviesScoreAvg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArr = moviesArray.map(element => element);
    newArr.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    newArr.sort(function (a, b) {
        return a.year - b.year;
    });
    
    return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArr = [];
    let condition = moviesArray.length;

    moviesArray.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

    if (moviesArray.length > 20) condition = 20;

    for (i=0; i < condition; i++) {
        newArr.push(moviesArray[i].title);
    }

    return newArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
