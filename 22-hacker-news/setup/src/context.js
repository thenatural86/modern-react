import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // two values from useReducer, state and dispatch function.
  // pass in reducer function, responsible for setting up state, and initial state
  const [state, dispatch] = useReducer(reducer, initialState)

  // data fetching function
  const fetchStories = async (url) => {
    // to make a change to state use the dispatch function, which takes in an object
    dispatch({ type: 'SET_LOADING' })
    const response = await fetch(url)
    const data = await response.json()
  }
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
