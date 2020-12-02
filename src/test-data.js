const filmsRaw = [{
  "name": `Bronson`,
  "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
  "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
  "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
  "background_color": `#73B39A`,
  "description": `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
  "rating": 3.6,
  "scores_count": 109661,
  "director": `Nicolas Winding Refn`,
  "starring": [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
  "run_time": 92,
  "genre": `Action`,
  "released": `2008`,
  "id": 1,
  "is_favorite": false,
  "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
}, {
  "name": `Pulp Fiction`,
  "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
  "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
  "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
  "background_color": `#795433`,
  "description": `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
  "rating": 1.5,
  "scores_count": 1635992,
  "director": `Quentin Tarantino`,
  "starring": [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`],
  "run_time": 153,
  "genre": `Crime`,
  "released": `1994`,
  "id": 2,
  "is_favorite": false,
  "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
}, {
  "name": `Matrix`,
  "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/matrix.jpg`,
  "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/matrix.jpg`,
  "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/matrix.jpg`,
  "background_color": `#B9B27E`,
  "description": `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`,
  "rating": 4.4,
  "scores_count": 1503092,
  "director": `Wachowski Brothers`,
  "starring": [`Keanu Reeves`, `Laurence Fishburne`, `Carrie-Anne Moss`],
  "run_time": 136,
  "genre": `Action`,
  "released": `1999`,
  "id": 4,
  "is_favorite": false,
  "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
}];

const films = [{
  "title": `Bronson`,
  "poster": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
  "frame": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
  "background": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
  "backgroundColor": `#73B39A`,
  "description": `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
  "ratingText": `Normal`,
  "rating": 3.6,
  "ratings": `109661`,
  "director": `Nicolas Winding Refn`,
  "starring": [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
  "runtime": 92,
  "genre": `Action`,
  "year": `2008`,
  "id": 1,
  "isFavorite": false,
  "video": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  "previewVideoLink": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
}, {
  "title": `Pulp Fiction`,
  "poster": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
  "frame": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
  "background": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
  "backgroundColor": `#795433`,
  "description": `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
  "ratingText": `Bad`,
  "rating": 1.5,
  "ratings": `1635992`,
  "director": `Quentin Tarantino`,
  "starring": [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`],
  "runtime": 153,
  "genre": `Crime`,
  "year": `1994`,
  "id": 2,
  "isFavorite": false,
  "video": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  "previewVideoLink": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
}, {
  "title": `Matrix`,
  "poster": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/matrix.jpg`,
  "frame": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/matrix.jpg`,
  "background": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/matrix.jpg`,
  "backgroundColor": `#B9B27E`,
  "description": `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`,
  "ratingText": `Normal`,
  "rating": 4.4,
  "ratings": `1503092`,
  "director": `Wachowski Brothers`,
  "starring": [`Keanu Reeves`, `Laurence Fishburne`, `Carrie-Anne Moss`],
  "runtime": 136,
  "genre": `Action`,
  "year": `1999`,
  "id": 4,
  "isFavorite": false,
  "video": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  "previewVideoLink": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
}];

const film = {
  "title": `Pulp Fiction`,
  "poster": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Pulp_Fiction.jpg`,
  "frame": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/pulp-fiction.jpg`,
  "background": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Pulp_Fiction.jpg`,
  "backgroundColor": `#795433`,
  "description": `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
  "rating": 1.5,
  "ratings": `1635992`,
  "director": `Quentin Tarantino`,
  "starring": [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`],
  "runtime": 153,
  "genre": `Crime`,
  "year": `1994`,
  "id": 2,
  "isFavorite": false,
  "video": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  "previewVideoLink": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

const reviews = [{
  "id": 1,
  "user": {
    "id": 19,
    "name": `Christina`
  },
  "rating": 3.3,
  "comment": `I love this movie. This film is a milestone in cinematography. Great Immersive camera-work. This film is an experience and i has already seen it 4 times and I only see more quality of the film.`,
  "date": `2020-10-09T13:38:44.769Z`
}, {
  "id": 2,
  "user": {
    "id": 25,
    "name": `Sophie`
  },
  "rating": 9,
  "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`,
  "date": `2020-11-04T13:38:44.769Z`
}, {
  "id": 3,
  "user": {
    "id": 7,
    "name": `Jack`
  },
  "rating": 9,
  "comment": `Unfortunately we don't have a reliable way to tell the true ratings of a movie.`,
  "date": `2020-10-09T13:38:44.769Z`
}];

const avatarUrl = `/avatar.jpg`;

const user = {
  "id": 1,
  "email": `Oliver.conner@gmail.com`,
  "name": `Oliver.conner`,
  "avatar_url": `img/1.png`
};

const noop = () => {};

const genres = [`Comedy`, `Drama`, `Thriller`];

export {films, genres, reviews, avatarUrl, user, film, filmsRaw, noop};
