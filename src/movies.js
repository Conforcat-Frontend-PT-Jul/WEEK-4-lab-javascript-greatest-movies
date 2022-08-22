// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//e representa un nuevo elemento - objeto de tipo evento.

function getAllDirectors(moviesArray) {
  return moviesArray.map((element) => element.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(dramaMovies) {
  return dramaMovies.filter(
    (eachMovie) =>
      eachMovie.director === "Steven Spielberg" &&
      eachMovie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesAverage) {
  let average = moviesAverage.reduce((acc, movie) => {
    if (movie.score === "" || !movie.score) {
      acc += 0;
    } else {
      acc += movie.score / moviesAverage.length;
    }
    return acc;
  }, 0);
  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaAvg) {
  let dramaMovies = dramaAvg.filter((movie) => movie.genre.includes("Drama"));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return [...moviesArray].sort(
    (a, b) => a.year - b.year || a.title.localeCompare(b.title)
  );
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArr = [...moviesArray];

  const titles = newArr.map((movie) => movie.title);

  const orderedTitles = titles.sort();

  return orderedTitles.slice(0, 20);
}
