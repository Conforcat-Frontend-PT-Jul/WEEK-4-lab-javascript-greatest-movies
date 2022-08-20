// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}

function getAllDirectorsNotDuplicated(moviesArray) {
    const directorsList = [];
    
    moviesArray.forEach(movie => {
        if (!directorsList.includes(movie.director)) directorsList.push(movie.director);
    });
    
    return directorsList;
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

    // DUDA 1/2:
    // No entiendo muy bien lo de: "return a new array, not mutate the original one"
    // a) ¿Para qué sirve?
    //      -> Se usa para no modificar el array original y así no editarlo (puede que se necesite para otras cosas)
    // b) ¿Por qué así sí funcina? [...moviesArray]
    //      -> Porque eso justamente genera un nuevo array (al poner []) con los datos del array original (...moviesArray)

    return [...moviesArray].sort(orderAsc);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(movie => movie.title).sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    // DUDA 2/2:
    // ¿Por qué así no funciona y antes sí?  -->  const durationMovies = [...moviesArray];
    //      -> Debería funcionar, está correcto. Debe ser algo de Jasmine


    const durationMovies = JSON.parse(JSON.stringify(moviesArray));
    console.log("durationMovies")
    console.log(durationMovies)
    const durationMovies2 = [...moviesArray];
    console.log("durationMovies2")
    console.log(durationMovies2)
    
    durationMovies.map(movie => {
        const hours = Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60;
        const mins = Number(movie.duration.slice(movie.duration.indexOf(' '), movie.duration.indexOf('min')));
        movie.duration = hours + mins;
    });
    
    return durationMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null;

    const averageObj = {};

    moviesArray.forEach(movie => {
        if (Object.keys(averageObj).includes((movie.year).toString())) {
            averageObj[movie.year] = (averageObj[movie.year] + movie.score)/2;
        } else {
            averageObj[movie.year] = movie.score;
        }
    });

    const arr = Object.values(averageObj);
    const rate = Math.max(...arr);
    const year = Object.keys(averageObj).find(key => averageObj[key] === rate);
    
    return `The best year was ${year} with an average score of ${rate}`;
}