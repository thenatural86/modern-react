const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'CLEAR_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    default:
      break
  }
  return state
}

export default reducer
