// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map( movie => movie.director);
    const cleanDirectors = [];
    for (let i=0; i<directors.length; i++) {
        if(cleanDirectors.includes(directors[i])) {
            continue;
        }
        cleanDirectors.push(directors[i]);
    }
    return cleanDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaStephen = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return dramaStephen.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   if(moviesArray.length === 0 ) {
    return 0;
   } else {
    const scores = moviesArray.map( movie => movie.score);

    const scores2 = [];

    for(i in scores) {
        if(i!=null) {
            scores2.push(scores[i])
        }
    }

    const scoreSum = scores2.reduce( (total, movie) => total + movie)
    return Math.round(scoreSum / scores.length *100 ) /100 ;
   }
}
console.log(scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMovies = [...moviesArray];
    const ordered = newMovies.sort( function (a,b) {
        if (a.year < b.year) return -1; 
        if (a.year > b.year) return 1; 
        if (a.year == b.year) 
        {
            if(a.title > b.title) return 1;
            if(a.title < b.title) return -1;
        }

    }
        )
    return ordered
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMovies = [...moviesArray];

    const ordered = newMovies.sort( function (a,b) {
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
    }
        )
    
    const reducedToString = [];
    for(let i=0; i<ordered.length; i++) {
        reducedToString.push(ordered[i].title)
    }


    if(reducedToString.length >=20 ) {
    return reducedToString.slice(0,20)
        }    else {
    return reducedToString;
        }
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMovies = moviesArray.map(function (movie) {
        const hours = movie.duration.slice(0, movie.duration.indexOf("h"));
        let minutes =0;
        if(movie.duration.includes("m")) {
         minutes = movie.duration.slice(movie.duration.indexOf(" ")+1, movie.duration.indexOf("m"));
        } 
        const durationMins = parseInt(hours)*60 + parseInt(minutes);
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: durationMins,
            genre: movie.genre,
            score: movie.score
                    }
    }  );
    
    return newMovies;
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average

// below is Work in Progress
/*
function bestYearAvg(moviesArray) {
    const yearsScore = moviesArray.map( function(movie) { 
        return {
          year: movie.year,
          score: movie.score
        }
    });
    //return yearsScore;
    const years = yearsScore.map( elem => elem.year);

    let counter = {};
    for(i of years) {
        let internalCounter = 0;
        if(counter[i]) {
            counter[i] += 1;

        } else {
            counter[i] = 1;
        }
    }
    console.log(counter)
    };

console.log(bestYearAvg(movies))

/*
    const groupedMovies = [];
    for (let i=0; i<years.length; i++) {
        if(groupedMovies.includes(years[i])) {
            continue;
        }
        groupedMovies.push(years[i]);
    } 
    const newMovies = [...groupedMovies];
    //return newMovies.sort();
    return years
}

console.log(bestYearAvg(movies))
*/
