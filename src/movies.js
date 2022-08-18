//import { movies } from "./data";

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
  return moviesArray.map((element) => element.director);
}

//Bonus - Iteration 1.1: Clean the array of directors
function cleanDirectors(moviesArray) {
  const directorsArray = [];
  moviesArray.map((movie) => {
    if (!directorsArray.includes(movie.director))
      directorsArray.push(movie.director);
  });
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const filteredMovies = moviesArray
    .filter((movie) => {
      return movie.director === "Steven Spielberg";
    })
    .filter((movie) => {
      return movie.genre.includes("Drama");
    }).length;
  return filteredMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sumMovies = moviesArray.reduce((acc, curr) => {
    if (curr.hasOwnProperty("score")) {
      if (curr.score >= 0) {
        acc += curr.score;
      } else if (curr.score === "") {
        acc += 0;
      }
    } else {
      acc += 0;
    }

    return Number(acc);
  }, 0);
  return Number((sumMovies / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  let dramaArray = moviesArray.filter((element) =>
    element.genre.includes("Drama")
  );
  return scoresAverage(dramaArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  const newArr = moviesArray.map((movie) => {
    return movie;
  });

  const yearArr = newArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year === b.year) {
      if (a.name > b.name) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });

  return yearArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesOrdered = [...moviesArray]
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
  return moviesOrdered;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArry = JSON.parse(JSON.stringify(moviesArray));
  newMoviesArry.map((movie) => {
    const hours = movie.duration.split("h")[0];
    const minutes = movie.duration.split("h")[1].split("min")[0];
    movie.duration = Number(hours * 60) + Number(minutes);
  });
  return newMoviesArry;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  let yearList = moviesArray.map((elem) => elem.year);
  let uniqueYearlist = yearList.filter(
    (elem, index) => yearList.indexOf(elem) === index
  );
  let result = {};
  for (let elem of uniqueYearlist) {
    result[elem] = [];
  }
  console.log(result);
  moviesArray.forEach((elem) => {
    let year = elem.year;
    result[year].push(elem);
  });
  let averageResult = [];
  for (let key of Object.keys(result)) {
    averageResult.push([scoresAverage(result[key]), key]);
  }
  averageResult.sort((a, b) => {
    if (a[0] != b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });

  return `The best year was ${averageResult[0][1]} with an average score of ${averageResult[0][0]}`;
}