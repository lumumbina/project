'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

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

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
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
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    } else {
        console.log('No');
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let answerGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i - 1] = answerGenres;
    }
}

writeYourGenres();