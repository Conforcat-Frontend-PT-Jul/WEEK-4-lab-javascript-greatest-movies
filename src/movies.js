// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArrays = moviesArray.map(function (movie) {
    return movie.director;
  });

  return directorsArrays;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  let movieCount = 0;

  moviesArray.filter(function (movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      movieCount++;
    }
  });

  return movieCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray == "") {
    return 0;
  }

  let moviesScores = moviesArray
    .filter(function (movie) {
      if (typeof movie.score === "number") {
        return movie.score;
      }
    })
    .map(function (movie) {
      return movie.score;
    });

  let total = moviesScores.reduce((a, b) => a + b, 0) / moviesArray.length;

  total = parseFloat(total.toFixed(2));

  return total;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter(function (movie) {
    if (movie.genre.includes("Drama")) {
      return movie;
    }
  });

  if (dramaMovies == "") {
    return 0;
  }

  let dramaScores = dramaMovies
    .filter(function (movie) {
      if (typeof movie.score === "number") {
        return movie.score;
      }
    })
    .map(function (movie) {
      return movie.score;
    });

  let total = dramaScores.reduce((a, b) => a + b, 0) / dramaMovies.length;

  total = parseFloat(total.toFixed(2));

  return total;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedMovies = [...moviesArray].sort(function (a, b) {
    if (a.year != b.year) {
      return a.year - b.year;
    } else {
      let titleA = a.title.toLowerCase(),
        titleB = b.title.toLowerCase();
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let movieTitles = moviesArray.map(function (movie) {
    return movie.title;
  });

  let sortedMovies = movieTitles.sort(function (a, b) {
    let titleA = a.toLowerCase(),
      titleB = b.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
  });

  const twentySortedMovies = sortedMovies.slice(0, 20);

  return twentySortedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
