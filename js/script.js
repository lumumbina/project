'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

//let i = 0;
//while (i < 2) 
//do 
for (let i = 0; i < 2; i++) {
    const answer = prompt('Один из последних просмотренных фильмов?', ''),
        rating = +prompt('На сколько оцените его?', '');

    //i++;

    if (answer != null && rating != null && answer != '' && rating != '' && answer.length <= 50) {
        personalMovieDB.movies[answer] = rating;
    } else {
        i--;
    }
}
//while (i < 2);
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);