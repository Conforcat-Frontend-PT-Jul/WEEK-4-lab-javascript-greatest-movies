// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map (function(movie){
    return movie.director;
  });

  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const StivenSpilverg = moviesArray.filter(function(movie){
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });
  return StivenSpilverg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray.length === 0) {
    return 0;
  }

  const totalScores = moviesArray.reduce(function(sum, movie){
    if(typeof movie.score === 'number') {
      return sum + movie.score;
    }
    return sum;
  }, 0)

  const avgScore = totalScores / moviesArray.length;
  return Number(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  
  const dramaMovies = moviesArray.filter (function(movie){
    return movie.genre.includes('Drama');
  });

  if(dramaMovies.length === 0) {
    return 0;
  }
  
  const dramaScore = dramaMovies.reduce(function(sum, movie){
      if(typeof movie.score === 'number') {
        return sum + movie.score;
      }
      return sum;
  }, 0);

  const avgDramaScore = dramaScore / dramaMovies.length;
  return Number (avgDramaScore.toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArr = moviesArray.slice();
  const moviesYear = newMoviesArr.sort(function(movie1, movie2){
    if (movie1.year > movie2.year) {
      return 1;
    }
    if (movie1.year < movie2.year) {
      return -1;
    }

    if (movie1.title > movie2.title) {
      return 1;
    }
    if (movie1.title < movie2.title) {
      return -1;
    }

    return 0;

    //return movie1.year - movie2.year;
  }); 

  return moviesYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newMoviesArrMap = moviesArray.map(function(movie){
    return movie.title;
  });
  const moviesTitles = newMoviesArrMap.sort();

  if(moviesTitles.length < 20){
    return moviesTitles;
  }

  moviesTitles.splice(20);
  return moviesTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArr = moviesArray.slice();
  const newArrayMap = newMoviesArr.map(function(movie){

    if(movie.duration === undefined || typeof movie.duration !== 'string') {
      return movie;
    }

    const listHourMin = movie.duration.split(' ');
    if(listHourMin[0] === undefined) {
      listHourMin[0] = '0h';
    }
    if(listHourMin[1] === undefined) {
      listHourMin[1] = '0min';
    }

    const hourText = listHourMin[0].replace('h', '');
    const minText = listHourMin[1].replace('min', '');

    const hour = parseInt(hourText);
    const min = parseInt(minText);

    const newDuration = hour * 60 + min;

    movie.duration = newDuration;
    return movie;
  });

  return newArrayMap;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  
  if(moviesArray.length === 0) {
    return null;
  }
  
  const moviesYears = moviesArray.reduce(function(accumulator, movie){
    
    let avgYear = accumulator.find(function(movieFind){
      return movieFind.year === movie.year;
    });
    
    if(avgYear === undefined) {
      avgYear = {
        year: movie.year,
        totalMovies: 1,
        totalScore: movie.score
      };

      accumulator.push(avgYear);

    } else {
      avgYear.totalMovies = avgYear.totalMovies + 1;
      avgYear.totalScore = avgYear.totalScore + movie.score;
    }

    return accumulator;
  }, []);

  moviesYears.sort(function(year1, year2){

    const avgYear1 = year1.totalScore / year1.totalMovies;
    const avgYear2 = year2.totalScore / year2.totalMovies;

    if (avgYear1 > avgYear2) {
      return -1;
    }
    if (avgYear1 < avgYear2) {
      return 1;
    }

    if (year1.year > year2.year) {
      return 1;
    }
    if (year1.year < year2.year) {
      return -1;
    }

    return 0;
  });

  const topYearMovie = moviesYears[0];
  const bestYear = topYearMovie.year
  const avgScore = topYearMovie.totalScore / topYearMovie.totalMovies;
  
  return `The best year was ${bestYear} with an average score of ${avgScore}`; 
}


/*

function primeraLetraMayuscula(citiesToMap) {
    const capsCities = citiesToMap.map(function (city){
        let ini = city[0].toUpperCase();
        return ini + city.substring(1);
    });
    
    console.log(capsCities);
}

// array of cities:

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

primeraLetraMayuscula(['a','b','c','d','e']);
primeraLetraMayuscula(cities);

//
const students = [
    {
      name: 'Tony Parker',
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: 'Marc Barchini',
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: 'Claudia Lopez',
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: 'Alvaro Briattore',
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: 'Isabel Ortega',
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: 'Francisco Martinez',
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: 'Jorge Carrillo',
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: 'Miguel López',
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: 'Carolina Perez',
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: 'Ruben Pardo',
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
  ];
  
  const notasFinales = students.map (function(theStudent){
    const promedioProyectos= (theStudent.firstProject + theStudent.secondProject)/2;
    const notaFinal= (promedioProyectos* 0.40) + (theStudent.finalExam * 0.60);

    return {
        name: theStudent.name,
        notaFinal: Math.round (notaFinal), 
    } ;
  }) ;

  console.log(notasFinales)

  //
  const menu = [
    { name: 'Carrots', calories: 150 },
    { name: 'Steak', calories: 350 },
    { name: 'Broccoli', calories: 120 },
    { name: 'Chicken', calories: 250 },
    { name: 'Pizza', calories: 520 }
  ];
  
  // your code:
  
const totalAvgCalories = menu.reduce(function(sum, calories){
    const caloriesProduct = sum + calories.calories;

    return caloriesProduct;  
}, 0);

  console.log(totalAvgCalories/menu.length); // 278
  //
  
  const product = {
    name: 'AmazonBasics Apple Certified Lightning to USB Cable',
    price: 7.99,
    manufacturer: 'Amazon',
    reviews: [
      { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
      { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
      { user: 'David Recoba', comments: 'Awesome', rate: 5 },
      { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
      { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
    ]
  };

  const totalReviews = product.reviews.reduce(function (acc, review) {
    return acc + review.rate;
  }, 0); // starts acc to 0
  const averageRate = totalReviews / product.reviews.length;
  
  console.log(`averageRate rate: ${averageRate}`); // <== averageRate rate:  3.2
  
  //Filter

  const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
  ];
  
  // your code...
const ofDrinkingAge = people.filter(function(person){
    return person.age > 20; 
});


  
  console.log(ofDrinkingAge);
  // [
  //   { name: 'Candice', age: 25 },
  //   { name: 'Tammy', age: 30 },
  //   { name: 'Nettie', age: 21 }
  // ]
  
  //
  const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];
  
  const poolFilter = places.filter (function(place){
    return place.pool ===true;
  });

  console.log (poolFilter);
  //
  const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

  const result = numbers.filter(function(number){
    return number % 2 !== 0 && number > 42;

  });

// your code...

console.log(result);
// [ 123, 99, 73, 45 ]
*/