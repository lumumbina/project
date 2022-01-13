'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function () {
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
    },

    detectPersonalLevel: function () {
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
    },

    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        } else {
            console.log('No');
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {


            let answerGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');

            if (answerGenres === null || answerGenres === '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = answerGenres;

            }
        }
        personalMovieDB.genres.forEach((item, i, genres) => {
            console.log(`Любимый жанр ${item}, начиная с ${[i+1]} - это ${genres}`);
        });

    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

//personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();