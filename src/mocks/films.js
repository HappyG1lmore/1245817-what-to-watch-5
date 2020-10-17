import {getRandomIntFromRange, getRandomArrayItem, getRandomLengthArray, getRandomTime, getRandomDate} from "../utils.js";

const MAX_PHRASE = 15;
const MAX_NAMES = 5;
const MAX_GENRES = 3;
const MAX_REVIEWS = 10;
const MIN_RATING = 0.1;
const MAX_RATING = 10;
const MIN_RATINGS = 1;
const MAX_RATINGS = 555;
const MIN_YEAR = 1933;
const MAX_YEAR = 2020;


const FILM_TITLES = [
  `Leon`,
  `Pirates of the Caribbean`,
  `Matrix`,
  `Forrest Gump`,
  `The Holiday`,
  `Terminator 2: Judgment Day`,
  `The Truman Show`,
  `The Silence of the Lambs`,
  `Klaus`,
  `City Lights`,
  `Awakenings`,
  `American History X`,
  `Snatch`,
  `Coco`,
  `The Departed`,
  `Gladiator`,

];
const PHRASE = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const NAMES = [
  `Dan Duryea`,
  `Anthony Mann`,
  `Anne Wigton`,
  `Heinz Herald`,
  `Richard Weil`,
  `Erich von Stroheim`,
  `Mary Beth Hughes`
];

const GENRES = [
  `Drama`,
  `Horror`,
  `Triller`,
  `Trash`,
  `Road movie`,
  `Film-Noir`,
  `Mystery`
];

const FRAMES = [
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `img/bohemian-rhapsody.jpg`,
  `img/macbeth.jpg`,
  `img/aviator.jpg`,
  `img/we-need-to-talk-about-kevin.jpg`,
  `img/what-we-do-in-the-shadows.jpg`,
  `img/revenant.jpg`,
  `img/johnny-english.jpg`,
  `img/shutter-island.jpg`,
  `img/snatch.jpg`,
  `img/moonrise-kingdom.jpg`,
];

/*
// eslint-disable-next-line consistent-return
const createRatingText = (rating) => {
  debugger
  switch (rating) {
    case (rating <= 3):
      return (`Bad`);
    case (rating > 3 && rating <= 5):
      return (`Normal`);
    case (rating > 5 && rating <= 8):
      return (`Good`);
    case (rating > 8 && rating < 10):
      return (`Very good`);
    case (rating === 10):
      return (`Awesome`);
    default:
  }
};
*/

// eslint-disable-next-line consistent-return
const createRatingText = (rating) => {
  if (rating <= 3) {
    return (`Bad`);
  } else if (rating > 3 && rating <= 5) {
    return (`Normal`);
  } else if (rating > 5 && rating <= 8) {
    return (`Good`);
  } else if (rating > 8 && rating < 10) {
    return (`Very good`);
  } else if (rating === 10) {
    return (`Awesome`);
  }
};

const createDescription = function () {
  const phrases = getRandomLengthArray(PHRASE, MAX_PHRASE);
  return phrases.join(` `);
};

const createReviews = function (amount) {
  const reviews = [];
  for (let i = 0; i < amount; i++) {
    const phrases = getRandomLengthArray(PHRASE, MAX_PHRASE);
    reviews.push({
      text: phrases.join(` `),
      rating: getRandomRating(MIN_RATING, MAX_RATING),
      author: getRandomArrayItem(NAMES),
      date: getRandomDate(),
    });
  }
  return reviews;
};

const getRandomRating = function (min, max) {
  return ((Math.random() * max)).toFixed(1);
};

export const generateFilm = (idFilm) => {
  const rating = getRandomRating(MIN_RATING, MAX_RATING);
  return {
    id: String(idFilm),
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    frame: getRandomArrayItem(FRAMES),
    title: getRandomArrayItem(FILM_TITLES),
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: getRandomLengthArray(GENRES, MAX_GENRES),
    year: String(getRandomIntFromRange(MIN_YEAR, MAX_YEAR)),
    rating,
    ratingText: createRatingText(rating),
    ratings: String(getRandomIntFromRange(MIN_RATINGS, MAX_RATINGS)),
    description: createDescription(),
    director: getRandomArrayItem(NAMES),
    starring: getRandomLengthArray(NAMES, MAX_NAMES),
    runtime: getRandomTime(),
    reviews: createReviews(getRandomIntFromRange(0, MAX_REVIEWS)),
  };
};
