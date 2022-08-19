// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((movies) => movies["director"]);
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let stevenMovies = moviesArray.filter(
    (movies) =>
      movies["director"] == "Steven Spielberg" &&
      movies["genre"].includes("Drama")
  );
  console.log(stevenMovies.length);
  return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let allScores = 0;
  if (moviesArray.length > 0) {
    let filterMovies = moviesArray.filter((movies) => movies["score"]);
    let totalScore = filterMovies.reduce(
      (previousValues, currentValues) =>
        previousValues + currentValues["score"],
      allScores
    );
    let averageScore = totalScore / moviesArray.length;
    return parseFloat(averageScore.toFixed(2));
  } else {
    return allScores;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let allScores = 0;
  let filterMovies = moviesArray.filter(
    (movies) =>
      movies["score"] &&
      movies["genre"].length == 1 &&
      movies["genre"].includes("Drama")
  );
  if (filterMovies.length > 0) {
    let totalScore = filterMovies.reduce(
      (previousValues, currentValues) =>
        previousValues + currentValues["score"],
      allScores
    );
    console.log(filterMovies);
    let averageScore = totalScore / filterMovies.length;
    return parseFloat(averageScore.toFixed(2));
  } else {
    return allScores;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArr = moviesArray.map((movie) => movie);
  let orderedMoviesByYear = newArr.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  });
  return orderedMoviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let listOfTitles = moviesArray.map((movie) => movie["title"]).sort();
  if (listOfTitles.length > 20) {
    return listOfTitles.slice(0, 20);
  } else {
    return listOfTitles;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
