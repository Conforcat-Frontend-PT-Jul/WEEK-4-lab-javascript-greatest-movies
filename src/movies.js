// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDir = moviesArray.map((x) => x.director);
  return allDir;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let ss = [];
  moviesArray.forEach((x) => {
    x.genre.forEach((y) => {
      if (y === "Drama") {
        if (x.director === "Steven Spielberg") {
          ss.push(x);
        }
      }
    });
  });
  return ss.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let scores = moviesArray.map((x) => x.score);
  let scoresClear = scores.filter(Boolean);
  if (!scoresClear.length) return 0;
  const averageScore =
    scoresClear.reduce((a, b) => a + b, 0) / scoresClear.length;
  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  //   let dramaMovies = [];
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArr = moviesArray.sort((a, b) => (a.year > b.year ? 1 : -1));
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
