import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favoriteReducer from "../reducers/favoriteReducer"
import searchReducer from "../reducers/searchReducer"

const rootReducer = combineReducers({
  favorite: favoriteReducer,
  search: searchReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
