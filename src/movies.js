//import movies from './data';

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length < 1) return 0;

  let total = moviesArray.reduce((acc, movie) =>
    acc += movie.score || 0, 0)
  return Number((total / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let avgDrama = moviesArray.filter(movie => movie.genre.includes("Drama"))
  return scoresAverage(avgDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderedArr = [...moviesArray];
  orderedArr.sort((a, b) => {
      if (a.year < b.year) { return -1; }
      else if (a.year > b.year) { return 1; }
      else
        if (a.title < b.title) { return -1; }
        else if (a.title > b.title) { return 1; }
        return 0
  }) 
  return orderedArr;
};


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  moviesArray.sort( (a , b) => {
    if (a.title < b.title) { return -1; }
    else if (a.title > b.title) { return 1; }
    return 0;
  })
  return moviesArray.map( movie => movie.title).slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  var moviesNewArray = JSON.parse( JSON.stringify( moviesArray ));
  moviesNewArray.map( movie => {
      let hours = movie.duration.split("h")[0];
      let minutes = movie.duration
        .split("h")[1]
        .split("min")[0];
      movie.duration = Number(hours * 60) + Number(minutes);
  });
  return moviesNewArray;
}
    
turnHoursToMinutes(movies);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length < 1) return null;

  const years = moviesArray.map((movie) => movie.year);
  console.log(years);

  const groupedYears = years
  .filter((element, index) => {return years.indexOf(element) === index;})
  .sort()
  console.log(groupedYears);

  let result = {};
  for (let element of groupedYears) {
    result[element] = [];
  }
  console.log(result);
  moviesArray.forEach((element) => {
    result[element.year].push(element);
  });
  console.log(result);

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

  return `The best year was ${averageResult[0][1]} with an average score of ${averageResult[0][0]}`
}

bestYearAvg(movies);