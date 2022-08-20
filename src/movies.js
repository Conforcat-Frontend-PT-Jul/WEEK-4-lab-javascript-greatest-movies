// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaMoviesDirectedByStevenSpielberg = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return dramaMoviesDirectedByStevenSpielberg.length;
}

const round = (value, digits) =>
  Math.round(value * 10 ** digits) / 10 ** digits;

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const totalScore = moviesArray.reduce((accumulator, movie) => {
    if (movie.score) {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);
  const averageScore = totalScore / moviesArray.length;
  return round(averageScore, 2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  averageScore = scoresAverage(dramaMovies);
  return averageScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray].sort((first, second) => {
    if (first.year > second.year) {
      return 1;
    } else if (first.year < second.year) {
      return -1;
    } else {
      return first.title.localeCompare(second.title);
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map((movie) => movie.title);
  titles.sort((first, second) => first.localeCompare(second));
  const topTwentyTitles = titles.slice(0, 20);
  return topTwentyTitles;
}

const convertDurationToNumberOfMinutes = (duration) => {
  const minutes = duration.split(" ").reduce((accumulator, value) => {
    let number = parseInt(value);
    if (value.includes("h")) number *= 60;
    return accumulator + number;
  }, 0);
  return minutes;
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesWithHoursTurnedToMinutes = moviesArray.map((movie) => {
    const movieWithHoursTurnedToMinutes = { ...movie };
    movieWithHoursTurnedToMinutes.duration = convertDurationToNumberOfMinutes(
      movie.duration
    );
    return movieWithHoursTurnedToMinutes;
  });
  return moviesWithHoursTurnedToMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
const bestYearAvg = (array) => {
  if (array.length === 0) {
    return null;
  }

  const yearlyAverageScore = array.reduce((accumulator, movie) => {
    const yearOfMovie = movie.year;
    const scoreOfMovie = movie.score;

    if (typeof accumulator[yearOfMovie] === "undefined") {
      accumulator[yearOfMovie] = [scoreOfMovie];
    } else {
      accumulator[yearOfMovie].push(scoreOfMovie);
    }

    return accumulator;
  }, {});

  for (let year in yearlyAverageScore) {
    const averageScoreOfYear = yearlyAverageScore[year].reduce(
      (accumulator, score, index, originalArray) =>
        accumulator + score / originalArray.length,
      0
    );
    yearlyAverageScore[year] = averageScoreOfYear;
  }

  const auxiliaryArray = Object.entries(yearlyAverageScore);

  auxiliaryArray.sort((a, b) => {
    const scoreOfYearA = a[1];
    const scoreOfYearB = b[1];
    if (scoreOfYearA > scoreOfYearB) {
      return -1;
    } else {
      return 1;
    }
  });

  const year = auxiliaryArray[0][0];
  const score = auxiliaryArray[0][1];

  return `The best year was ${year} with an average score of ${score}`;
};
