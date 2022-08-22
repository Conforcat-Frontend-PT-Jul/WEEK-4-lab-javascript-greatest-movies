// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors() {
    let nameDirectors = movies.map(movies => movies.director);
    let duplicates = [...new Set(nameDirectors)];

   console.log([duplicates]);
}
getAllDirectors();

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//function howManyMovies(moviesArray) {}

/*function howManyMovies(){
  
  let sdrama = movies.filter((acc, movies) => acc + (movies.director ===   'Steven Spielberg' ? 1 : 0), 0);

	console.log(sdrama);
}
howManyMovies();
*/

function howManyMovies(){
let result = movies.filter(element => {
  return element.director === 'Spielberg' || element.genre === 'drama';
});
console.log(result)
}
howManyMovies();

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//function scoresAverage(moviesArray) {}

function scoresAverage() {
  let total = movies.reduce((acc, score) => acc + score, 0);

  return total / movies.length
  console.log(total)

}

scoresAverage();
//const average = scoresAverage(score);


// Iteration 4: Drama movies - Get the average of Drama Movies





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
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

