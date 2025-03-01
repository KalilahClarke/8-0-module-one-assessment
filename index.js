/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  if (!movies.length) {
    return [];
  }
  let movie = [];
  for (let i = 0; i < movies.length; i++) {
    movie.push(movies[i].title);
  }
  return movie;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  if (!movies.length) {
    return 0;
  }

  let metascore = Number(movies[0].metascore);

  for (let i = 0; i < movies.length; i++) {
    if (Number(movies[i].metascore) > metascore) {
      metascore = Number(movies[i].metascore);
    }
  }
  return metascore;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  if (!movies.length) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    sum += Number(movies[i].imdbRating);
  }
  return sum / movies.length;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
//Incomplete: Count isn't incrementing
function countByRating(movies) {
  if (!movies.length) {
    return {};
  }
  let rating = {};
  // Not needed since value would increment without a variable
  // let count = {};

  for (let i = 0; i < movies.length; i++) {
    //rating[movies[i].rated] = rating[movies[i].rated] + 1;
    //count[i] += 1;
    if (rating[movies[i].rated]) {
      rating[movies[i].rated] += 1;
    } else {
      rating[movies[i].rated] = 1;
    }
  }
  return rating;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  if (!movies.length) {
    return null;
  }
  let movie = null;
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === id) {
      movie = movies[i];
    }
  }
  return movie;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  if (!movies.length) {
    return [];
  }
  let movie = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.toUpperCase().includes(genre.toUpperCase())) {
      movie.push(movies[i]);
    }
  }
  return movie;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  if (!movies.length) {
    return [];
  }
  let movie = [];
  for (let i = 0; i < movies.length; i++) {
    let publishedYear = movies[i].released.split(" ");
    if (Number(publishedYear[publishedYear.length - 1]) <= year) {
      movie.push(movies[i]);
    }
  }
  return movie;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  if (!movies.length) {
    return null;
  }
  let movie = movies[0].title;
  let priceMoney = Number(movies[0].boxOffice.replace(/,/g, "").slice(1));
  // Making the string of money into a Number so that total BoxOffice Income can be compared for each movie
  //console.log(priceMoney);
  for (let i = 0; i < movies.length; i++) {
    if (priceMoney < Number(movies[i].boxOffice.replace(/,/g, "").slice(1))) {
      priceMoney = Number(movies[i].boxOffice.replace(/,/g, "").slice(1));
      //console.log(priceMoney);
      movie = movies[i].title;
    }
  }
  return movie;
}

// let movie = movies[0].title;
//   let priceMoney = Number(movies[0].boxOffice.replace(/,/g, "").slice(1));
//   let money = movies[0].boxOffice.split("");
//   // Making the string of money into a Number so that total BoxOffice Income can be compared for each movie
//   //console.log(priceMoney);
//   for (let i = 0; i < money.length; i++) {
//     //console.log(money);
//     // if (priceMoney < Number(movies[i].boxOffice.replace(/,/g, "").slice(1))) {
//     // $100,000,000
//     if (money[i] === "$" || money[i] === ",") {
//       return i
//       //   priceMoney = Number(movies[i].boxOffice.replace(/,/g, "").slice(1));
//       //console.log(priceMoney);
//       money.splice(i, 1);
//       movie = movies[i].title;
//     }
//     return -1
//   }
//   money = Number(money.join(""));
//   let highestGross = 0;
//   if (highestGross < money) {
//     highestGross = money;
//   }
//   console.log(money);
//   return movie;
// }

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
