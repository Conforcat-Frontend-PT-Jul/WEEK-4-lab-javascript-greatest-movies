// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    
        console.log(`Entro en la funcion`);
           let arrayOfDirectors= movies.map(movies=>movies.director);
            console.log(arrayOfDirectors);
            return arrayOfDirectors;
        
}

//No entiendo porque Jasmine dice "should return a new array with the same length as the original one"
getAllDirectors(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let contador=0;
 let contador2=0;
 let genre= movies.genre;
   const spilbergDrama = moviesArray.filter(
     function(movieFiltered) {
       
       if((movieFiltered.director === 'Steven Spielberg')){
         contador += 1;
         }
       console.log(movieFiltered.genre);
       
        if(movieFiltered.genre=='Drama'){
          contador2 +=1;
        }
          //Entro al Array, pero no consigo comparar las posiciones de dentro: "Drama"
        }
     );
console.log(contador);
  console.log(contador2);
       return contador;
}

howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const totalScore = moviesArray.score.reduce(function (acc, review) { //undefined
  return acc + moviesArray.store;
}, 0); // starts acc to 0
const averageScore = totalScore / moviesArray.score.length;
 
console.log(`averageScore score: ${averageScore}`);
return averageScore;
}

scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if(movieFiltered.genre=='Drama'){
    const totalScore = moviesArray.score.reduce(function (acc, review) { //undefined
      return acc + moviesArray.store;
    }, 0); // starts acc to 0
    const averageScore = totalScore / moviesArray.score.length;
     
    console.log(`averageScore score: ${averageScore}`);
    return averageScore;
  }

}

dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  function orderByYear(moviesArray) {//Falta verificar con Jasmine
    let copyMoviesArray = [...moviesArray];
      //console.log(`copia`);
    //console.log (copyMoviesArray);
    copyMoviesArray.sort((a,b)=> {
      if(a.year < b.year) {
        return -1;
      }
      if(a.year > b.year) {
        return 1;
      }
      if(a.year==b.year){
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      }
      return 0;
    });
     //console.log(`ordenados`);
    //console.log(copyMoviesArray);
     return copyMoviesArray; 
    }
  }
    orderByYear(movies);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let copyMoviesArray = [...moviesArray];
  //console.log(`copia`);
    //console.log (copyMoviesArray);
    copyMoviesArray.sort((a,b)=> { 
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  return 0;
});
   
   console.log(`ordenados`);
  for(i=0;i<20;i++){
   console.log(copyMoviesArray.title); //problema con el undefined
     }
    return copyMoviesArray; 
}

orderAlphabetically(movies);








// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
