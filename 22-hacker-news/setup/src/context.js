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

// obj that contains initial state values
const initialState = {
  isLoading: true,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // two values from useReducer, state and dispatch function.
  // pass in reducer function, responsible for setting up state, and initial state
  const [state, dispatch] = useReducer(reducer, initialState)

  // async data fetching function that dispatches SET_LOADING action
  const fetchStories = async (url) => {
    // to make a change to state use the dispatch function, which takes in an object
    dispatch({ type: 'SET_LOADING' })
  }

  // invokes fetchStories when app loads
  useEffect(() => {
    fetchStories()
  }, [])

  // pass in all the properties in state from useReducer
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
