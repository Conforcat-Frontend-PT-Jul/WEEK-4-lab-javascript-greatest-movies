// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    return moviesArray.map(movies => movies.director)
    
 /*    let directorList = []
    for (let i=0; i < movies.length; i++) {  
        directorList.push(movies[i].director)
    }
    return directorList */
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'))).length

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0

    const moviesScored = moviesArray.filter((movies => movies.score));
    const scores = moviesScored.map(movies => movies.score)
        let otherScores = 0
          scores.forEach(element => {otherScores += element});
          return Number((otherScores / moviesArray.length).toFixed(2));    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const onlyDrama = moviesArray.filter((movies => movies.genre.includes('Drama')));
    if (!onlyDrama.length) return 0
        let dramaSum = onlyDrama.reduce((acc, movie)=> acc += movie.score || 0,0)
        return Number((dramaSum /onlyDrama.length))
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   const ordered = moviesArray.sort((a, b) => {
    if (a.year < b.year) return -1
    if (a.year > b.year) return 1 
    else if (a.year === b.year) {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
    }
   })
        return ordered 

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphabetically = moviesArray.sort((a, b) => {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        if (moviesArray.length > 19) {
            moviesArray.slice(0,20)
        }
    })
    return alphabetically.map(movies => movies.title)
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    time

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
