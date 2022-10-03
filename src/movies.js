// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
  return  array.map(movies => movies.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//function howManyMovies(moviesArray) {}

function howManyMovies(array) {
  return array.filter(item => item.director === "Steven Spielberg" && item.genre.includes("Drama")).length;

  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//function scoresAverage(moviesArray) {}

function scoresAverage(array) {
	if(!array.length) return 0;
  //let scores = array.map(item => item.score);
  let sum = array.reduce((a, b) =>  a += b.score || 0, 0);
  
  return Number((sum/array.length).toFixed(2)) ;

}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(array){
  
  let dramaDrama = array.filter(item => item.genre.includes("Drama"));
  if(!dramaDrama.length) return 0;
  let sc = dramaDrama.map(item => item.score );
  let suma =  sc.reduce((a, b) =>  a + b);
  let scoreAverageDrama = parseFloat(suma/dramaDrama.length).toFixed(2);
  return Number(scoreAverageDrama);
}
dramaMoviesScore(movies)

// LLEGAMOS HASTA ACA!!

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let year = array.sort((a, b) => Number(a.year) - Number(b.year));
  console.log([year]);
  return year
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let orden = array.map((movie) => movie.title)
  orden.sort() 
  let firstT = orden.slice(0,20) 
  return firstT
}
orderAlphabetically(movies)
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//function bestYearAvg(moviesArray) {}

