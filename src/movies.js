// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map(function (movies) {
        return movies.director;
    });

    return allDirectors;
    //console.log(allDirectors);
}

getAllDirectors(moviesArray);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0; }

    let result = moviesArray.filter((spdrama) => {
        return spdrama.director === 'Steven Spielberg' &&
        spdrama.genre.includes('Drama');
    });
        return result.length;
        //console.log(result.length);
}

console.log(howManyMovies(moviesArray));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0; }
  
    let totalSum = moviesArray
        .filter(function (scores){
            return scores = typeof scores.score === 'number'
        })
        
        .map(function (scores) {
            return scores.score;
          });
    
    let avgScores = totalSum.reduce((score1, score2) => score1 + score2, 0) / moviesArray.length;
    
    avgScores = parseFloat(avgScores.toFixed(2));

    return avgScores;
}
console.log(scoresAverage(moviesArray));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0; }
    let dramaMov = moviesArray.filter(function (movies) {
        if (movies.genre.includes('Drama')) {
        return movies;}
      });
    
      if (dramaMov.length === 0) {
        return 0;}
    
    let scoreDramas = dramaMov
        .filter(function (scores) {
          if (typeof scores.score === 'number') {
            return scores.score;}
        })
        .map(function (scores) {
          return scores.score;
        });
    
      let avgDramaScores = scoreDramas.reduce((score1, score2) => score1 + score2, 0) / dramaMov.length;
    
      avgDramaScores = parseFloat(avgDramaScores.toFixed(2));
    
      return avgDramaScores;
    }
    console.log(dramaMoviesScore(moviesArray));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedArray = [...moviesArray].sort((a, b) => {
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      if (a.year === b.year) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        if (a.title === b.title) return 0;
      }
      console.log(sortedArray);
    });
    return sortedArray;

}
console.log(orderByYear(moviesArray));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titlemovies = moviesArray.map(function (movies) {
        return movies.title;
      }); 
    let moviesSorted = titlemovies.sort(function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        if (a === b) return 0;
    });

    let onlymovies = moviesSorted.slice(0, 20);
  
    return onlymovies;

}
console.log(orderAlphabetically(moviesArray));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
