// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directArray = moviesArray.map(function(directors){
        return directors.director
    })
    return directArray
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(!moviesArray.length) return 0
    let spielberg = moviesArray.filter(function(movie) {
        return movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')
    })
    return spielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length) return 0
    const scoreArray = moviesArray.reduce(function(acc, cur){
        if(!cur.score) {
            return acc 
        }
      return acc + cur.score 
    },0)
    return Math.round((scoreArray / moviesArray.length) * 100) / 100
 }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const scoreFilter = moviesArray.filter(function(drama){
        return drama.genre.includes('Drama') 
    })
    if(!scoreFilter.length) return 0
    const scoreArray = moviesArray.reduce(function(acc, cur){
        if(cur.genre != 'Drama') { 
            return acc
        }
            return acc + cur.score
    },0)
    return Math.round((scoreArray/ scoreFilter.length) * 100) / 100
 }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleChange = moviesArray.map(function(titles){
        return titles.title
    })
    const nameOrder = titleChange.sort(function(a,z){
            return a.localeCompare(z)
        })
        let newArray = nameOrder.slice(0,20)
        return newArray
}  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
