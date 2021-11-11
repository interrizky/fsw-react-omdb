let MovieDataReducers = {
  MovieKeyword: 'world',
  SearchStatus: null
}

const DataReducers = ( state = MovieDataReducers, action ) => {
    switch(action.type) {
        case "MOVIE_DATA_CHANGE": {
            return {
                ...state,
                MovieKeyword: action.payload,
                SearchStatus: true                
            }
        }

        case "ZERO_DATA": {
            return {
                ...state,
                MovieKeyword: 'avatar',
                SearchStatus: false
            }
        }

        default: 
            return state
    }
}

export default DataReducers