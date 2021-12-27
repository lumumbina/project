const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '20');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};

const answerOne = prompt('Один из последних просмотренных фильмов?', 'RagingBull'),
    ratingOne = +prompt('На сколько оцените его?', '9.1'),
    answerTwo = prompt('Один из последних просмотренных фильмов?', 'Нокдаун'),
    ratingTwo = +prompt('На сколько оцените его?', '5.1');

personalMovieDB.movies[answerOne] = ratingOne;
personalMovieDB.movies[answerTwo] = ratingTwo;


console.log(personalMovieDB);