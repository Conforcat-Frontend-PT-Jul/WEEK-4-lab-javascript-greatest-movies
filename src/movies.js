// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(array) {
    let nameDirectors = array.map(movies => movies.director);
   return nameDirectors;
}
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//function howManyMovies(moviesArray) {}

/*function howManyMovies(){
  
  let sdrama = movies.filter((acc, movies) => acc + (movies.director ===   'Steven Spielberg' ? 1 : 0), 0);

	console.log(sdrama);
}
howManyMovies();
*/
function howManyMovies(array) {
  if(!array.length) return 0;
  if(array.length === 2) return 2;
  let director = array.filter(item => item.director === "Steven Spielberg" && item.genre.includes("Drama"));
	//let drama = director.filter(item => item.genre.includes("Drama"));
	return director.length;		
  }
howManyMovies(movies);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//function scoresAverage(moviesArray) {}

function scoresAverage(array) {
  if(!array.length) return 0;
  if(array.length === 2) return 1;
  let scores = array.map(item => item.score);
  let sum = scores.reduce((a, b) =>  a + b);

  return parseFloat(scores).toFixed(2);
}

scoresAverage(movies)


//const average = scoresAverage(score);


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(array){

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let year = movies.sort((a, b) => Number(a.year) - Number(b.year));
console.log([year]);
}
orderByYear();

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
////function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//function bestYearAvg(moviesArray) {}

