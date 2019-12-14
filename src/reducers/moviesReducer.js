const initialState = {
  movies: [
    {
      id: 1,
      title: 'Finding Nemo',
      year: 1992
    },
    {
      id: 2,
      title: 'Avengers',
      year: 2002
    },
    {
      id: 3,
      title: 'Lord of the Rings',
      year: 2005
    },
    {
      id: 4,
      title: 'Harry Potter',
      year: 2012
    },
    {
      id: 5,
      title: 'The Dark Knight',
      year: 2019
    },
  ],
  movie: {}
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      console.table(state.movies)
      return {
        ...state
      }

    case 'GET_MOVIE':
      let filteredMovie = state.movies.filter(movie => movie.id === action.payload);
      return {
        ...state,
        movie: filteredMovie[0]
      }
  
    default:
      return state;
  }
}

export default moviesReducer;