// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//console.log(getAllDirectors(movies));
function getAllDirectors(moviesArray) {
	let directors = moviesArray.map(item =>{
		return item.director;
	});

return directors; 
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//console.log(howManyMovies(movies));
function howManyMovies(moviesArray) {
	
	let steven = moviesArray.filter(item => {
		return item.director === "Steven Spielberg" && item.genre.includes("Drama") 
	});
	return steven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//console.log(scoresAverage(movies));

function scoresAverage(moviesArray) {
	if(moviesArray.length != 0){
		let sum = 0; 
		moviesArray.map(item =>{
			sum += item.score;
		});
	let avg = sum/moviesArray.length;
	return parseFloat(avg.toFixed(2));
	}
	else{
		return 0;
	}
}

// Iteration 4: Drama movies - Get the average of Drama Movies
console.log("Only drama: ",dramaMoviesScore(movies));
function dramaMoviesScore(moviesArray) {
	let sum = 0; 
	let onlyDrama = 0;
	moviesArray.map(item =>{
		if(item.genre.includes("Drama")){
			sum += item.score;
			onlyDrama ++;
		}
	});
	if(onlyDrama != 0){
		let avg = sum/onlyDrama;
		return parseFloat(avg.toFixed(2));
	}
	else{
		return 0;
	}
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
