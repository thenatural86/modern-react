import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

// reducer function takes in state and action
const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      // set loading action returns state and isLoading property is true
      return { ...state, isLoading: true }
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      }
    default:
      throw new Error(`no matching "${action.type}" action type`)
  }
}
export default reducer
