export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE"
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE"
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS"

export const addToFavoriteAction = (data) => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: data.company_name,
  }
}

export const removeFromFavoriteAction = (fav) => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: fav,
  }
}

export const setSearchResultsAction = (results) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results,
  }
}
