import moment from "moment";

export const getRandomIntFromRange = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const getRandomArrayItem = function (array) {
  return array[getRandomIntFromRange(0, array.length - 1)];
};

export const getRandomLengthArray = function (array, max) {
  let tempArray = [];
  for (let i = 0; i < getRandomIntFromRange(1, max); i++) {
    tempArray.push(array[getRandomIntFromRange(0, array.length - 1)]);
  }
  return tempArray;
};

export const getRandomBoolean = () => (
  Boolean(getRandomIntFromRange(0, 1))
);

export const getRandomTime = () => {
  const hours = getRandomIntFromRange(0, 24);
  const minutes = getRandomIntFromRange(0, 60);

  return {hours, minutes};
};

export const getRandomDate = () => {
  const currentDate = new Date();
  return moment(currentDate).format(`DD MMMM YYYY`);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const createRatingText = (rating) => {
  let ratingText = null;
  switch (true) {
    case (rating <= 3):
      ratingText = `Bad`;
      break;
    case (rating > 3 && rating <= 5):
      ratingText = `Normal`;
      break;
    case (rating > 5 && rating <= 8):
      ratingText = `Good`;
      break;
    case (rating > 8 && rating < 10):
      ratingText = `Very good`;
      break;
    case (rating === 10):
      ratingText = `Awesome`;
      break;
  }
  return ratingText;
};


export const adaptFilmToClient = (data) => ({
  id: data.id,
  backgroundColor: data.background_color,
  background: data.background_image,
  poster: data.poster_image,
  frame: data.preview_image,
  title: data.name,
  video: data.preview_video_link,
  genre: data.genre,
  year: String(data.released),
  rating: data.rating,
  ratingText: createRatingText(data.rating),
  ratings: String(data.scores_count),
  description: data.description,
  director: data.director,
  starring: data.starring,
  runtime: data.run_time,
  isFavorite: data.is_favorite,
});

export const adaptFilmsToClient = (films) => films.map(adaptFilmToClient);
