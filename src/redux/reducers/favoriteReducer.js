const initialState = {
  list: [],
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        list: state.list.includes(action.payload)
          ? state.list
          : [...state.list, action.payload],
      }
    case "REMOVE_FROM_FAVOURITE":
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
      }
    default:
      return state
  }
}

export default favoriteReducer
