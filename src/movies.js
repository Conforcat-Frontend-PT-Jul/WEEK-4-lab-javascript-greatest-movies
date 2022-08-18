// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = [];
  moviesArray.map((movie) => {
    directors.push(movie.director);
  });
  return directors;

  //BONUS 1.1
  /*
    moviesArray.map((movie) => {
        if (typeof directors.find(movie.director) === 'undefined') {
            directors.push(movie.director);
        }
    });*/
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let dramaMovies = moviesArray.filter(
    (movie) =>
      movie.genre.filter((genre) => genre === "Drama").length > 0 &&
      movie.director === "Steven Spielberg"
  );

  return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  let scores = moviesArray
    .filter((movie) => typeof movie.score === "number")
    .map((movie) => movie.score);
  let avg = scores.reduce((partialSum, a) => partialSum + a, 0);
  return Math.round((avg / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let dramaMovies = moviesArray.filter(
    (movie) =>
      movie.genre.filter((genre) => genre === "Drama").length > 0 &&
      typeof movie.score === "number"
  );

  if (dramaMovies.length === 0) return 0;

  let scores = dramaMovies.map((movie) => movie.score);
  let avg = scores.reduce((partialSum, a) => partialSum + a, 0);
  return Math.round((avg / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let movieArraySorted = [...moviesArray];
  movieArraySorted.sort(function (a, b) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      if (a.title === b.title) return 0;
    }
  });
  return movieArraySorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let movieArraySorted = [...moviesArray];

  movieArraySorted = movieArraySorted.map((movie) => movie.title);

  movieArraySorted.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
  });

  return movieArraySorted.length > 20
    ? movieArraySorted.slice(0, 20)
    : movieArraySorted;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let movieArrayInMinutes = [...moviesArray];

  movieArrayInMinutes = movieArrayInMinutes.map((movie) => {
    let duration = movie.duration;
    duration = duration.split(" ");
    let minutes = 0;
    duration.forEach((element) => {
      if (element.includes("h")) {
        minutes += parseInt(element.substring(0, element.indexOf("h"))) * 60;
      } else if (element.includes("min")) {
        minutes += parseInt(element.substring(0, element.indexOf("min")));
      }
    });
    return { ...movie, duration: minutes };
  });

  return movieArrayInMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  let copyMovieArray = [...moviesArray];
  let yearMoviesArray = new Map();

  moviesArray.forEach((movie) => {
    if (!yearMoviesArray.has(movie.year)) {
      yearMoviesArray.set(movie.year, [movie]);
    } else {
      yearMoviesArray[movie.year] = yearMoviesArray.get(movie.year).push(movie);
    }
  });

  let bestYear = {
    year: 0,
    avg: 0,
  };

  yearMoviesArray.forEach((yearMovies) => {
    let avg = this.scoresAverage(yearMovies);
    if (avg > bestYear.avg) {
      bestYear.year = yearMovies[0].year;
      bestYear.avg = avg;
    }
    if (avg === bestYear.avg && yearMovies[0].year < bestYear.year) {
      bestYear.year = yearMovies[0].year;
      bestYear.avg = avg;
    }
  });

  return (
    "The best year was " +
    bestYear.year +
    " with an average score of " +
    bestYear.avg
  );
}
