// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArr = [];
  moviesArray.map((movie) => {
    if (!directorsArr.includes(movie.director)) {
      directorsArr.push(movie.director);
    }
  });
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  let totalScore = moviesArray.reduce(
    (acc, movie) => (acc += movie.score || 0),
    0
  );
  return Number((totalScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filteredArr = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (!filteredArr.length) return 0;
  else if (filteredArr.length === 1) return filteredArr[0].score;
  const dramaScoreSum = filteredArr.reduce(
    (sum, movie) => (sum += movie.score),
    0
  );
  return Number((dramaScoreSum / filteredArr.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const shallowCopy = [...moviesArray];
  return shallowCopy.sort(function (a, b) {
    if (a.year === b.year) a.title.localeCompare(b.title);
    return a.year > b.year ? 1 : -1;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titlesArr = [];
  for (let movie of moviesArray) titlesArr.push(movie.title);
  const sortedTitles = titlesArr.sort((a, b) => a.localeCompare(b));
  if (titlesArr.length < 20) return sortedTitles;
  return sortedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const shallowCopy = JSON.parse(JSON.stringify(moviesArray));
  shallowCopy.map((movie) => {
    const hours = movie.duration.split("h")[0];
    const minutes = movie.duration.split("h")[1].split("min")[0];
    movie.duration = Number(hours * 60) + Number(minutes);
  });
  return shallowCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;

  let bestYear = 0;
  let bestAvg = 0;

  const years = moviesArray.map((movie) => movie.year);
  const filteredYears = years.filter(
    (year, index) => years.indexOf(year) === index
  );

  for (let year of filteredYears) {
    const workingArray = [];

    for (let movie of moviesArray) {
      if (movie.year === year) {
        workingArray.push(movie);
      }
    }
    const scoreSum = workingArray.reduce(
      (acc, movie) => (acc += movie.score || 0),
      0
    );
    const scoreAvg = Number((scoreSum / workingArray.length).toFixed(2));

    if (scoreAvg === bestAvg) {
      if (bestYear > year) {
        bestYear = year;
      }
    } else if (scoreAvg > bestAvg) {
      bestAvg = scoreAvg;
      bestYear = year;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
