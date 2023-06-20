// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(m=> m['director'])
}

function getAllDirectorsBonus(moviesArray) {
    return Array.from(new Set(getAllDirectors(moviesArray)))
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let wantedGenre = 'Drama';
    let wantedDirector = 'Steven Spielberg'
    return moviesArray.filter(m => m.genre.includes(wantedGenre) && m.director==wantedDirector).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length==0){return 0}
    let scores = moviesArray.map(movie=> movie.score)
    let sum = scores.reduce(function(accumulator, currentValue) {
        if (currentValue!=undefined){return accumulator + currentValue;}
        else{return accumulator}});
    return +( sum / scores.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let filteredArray= moviesArray.filter(m => m.genre.includes('Drama'));
    return scoresAverage(filteredArray); 
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = structuredClone(moviesArray);
    return newArray.sort(function (a, b) {
        if (a.year!=b.year){return a.year - b.year}
      else { return a.title.localeCompare(b.title) }})}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map(m=>m.title).sort().slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function (m) {
        let new_m = structuredClone(m);
        let dur = new_m.duration;                
        let hour = 0;
        let min = 0;
        if (dur.includes('h')){hour+=+dur.match(/(\d+)h/)[1] *60}
        if (dur.includes('min')){min+=+dur.match(/(\d+)min/)[1]}
        new_m['duration'] =  hour+min;
        return new_m;})
    };


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length==0){return null}
    let years =Array.from(new Set(moviesArray.map(m => m.year)));

    let avgYears = years.map(function(y) {
      let filteredArray= moviesArray.filter(m => m.year == y);
      return {'year':y,'score':scoresAverage(filteredArray)};}); 

    let bestYear = avgYears.sort(function(a,b) {
        if(b.score!=a.score){return b.score-a.score} else{return a.year-b.year};})[0];
        
    return `The best year was ${bestYear.year} with an average score of ${bestYear.score}`
  }

