// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => {
        return movie.director;
    })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const stevenDrama = moviesArray.filter((steven) => {
        return steven.genre.includes("Drama") && steven.director === "Steven Spielberg"
    })
   return stevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0){
        return 0;
    }

    const averageScore = moviesArray.reduce((accumulator, current) => {
        if (current.score){
            return accumulator += current.score;
        } else if (!current.score){
            return accumulator
        }
    }, 0);

    const result = averageScore / moviesArray.length

    return Number(result.toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama");
    });

    if (dramaMovies.length === 0){
        return 0;
    }

    const avgDrama = dramaMovies.reduce((accumulator, current) => {        
        if (current.genre.includes("Drama")){
            return accumulator + current.score;
        }
    }, 0);
    const result = avgDrama / dramaMovies.length;

    return Number(result.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const moviesYear = [...moviesArray]

    const result = moviesYear.sort((a, b) =>{
        if (a.year > b.year){
            return a.year - b.year;
        } else if ( a.year === b.year){
            if (a.title > b.title){
                return 1;
            } else {
                return -1;
            }
        } else{
            return -1;
        }
    }); 
        
        
    
    return result;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = [...moviesArray]
      .map((movie) => movie.title)
      .sort()
      .slice(0, 20);

    return movieTitles;
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesDuration = [...moviesArray];
        
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}