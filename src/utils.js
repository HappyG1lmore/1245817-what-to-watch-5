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

export const createRatingText = (rating) => {

  let ratingText = null;
  switch (rating) {
    case (rating <= 3):
      console.log(`TRUE !!!`)
      ratingText = `Bad`;
      break;
    case (rating > 3 && rating <= 5):
      console.log(`TRUE !!!`)
      ratingText = `Normal`;
      break;
    case (rating > 5 && rating <= 8):
      console.log(`TRUE !!!`)
      ratingText = `Good`;
      break;
    case (rating > 8 && rating < 10):
      console.log(`TRUE !!!`)
      ratingText = `Very good`;
      break;
    case (rating === 10):
      console.log(`TRUE !!!`)
      ratingText = `Awesome`;
      break;
  }
  return ratingText;
};
