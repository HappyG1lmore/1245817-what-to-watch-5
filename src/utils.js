
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
  video: data.video_link,
  previewVideoLink: data.preview_video_link,
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

export const secToDate = (secs) => {
  const date = new Date(1970, 0, 1);
  date.setSeconds(secs);
  return date;
};
