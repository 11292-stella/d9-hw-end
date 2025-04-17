import { configureStore, combineReducers } from "@reduxjs/toolkit"

import favoriteReducer from "../reducers/favoriteReducer"
import searchReducer from "../reducers/searchReducer"

const uniqueReducer = combineReducers({
  favorite: favoriteReducer,
  search: searchReducer,
})

const store = configureStore({
  reducer: uniqueReducer,
})

export default store
