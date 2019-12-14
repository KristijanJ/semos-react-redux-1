export const getMovies = () => {
  return {
    type: "GET_MOVIES"
  }
};

export const getMovie = (id) => {
  return {
    type: "GET_MOVIE",
    payload: id
  }
};