import CartItem from './CartItem'

const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'CLEAR_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    case 'INCREASE':
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
      })
      return { ...state, cart: tempCart }
    case 'DECREASE':
      let temp = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 }
          }
          return item
        })
        .filter((item) => item.amount !== 0)
      return { ...state, cart: temp }
    case 'GET_TOTAL':
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem
          const itemTotal = price * amount
          cartTotal.amount += amount
          cartTotal.total += itemTotal
          return cartTotal
        },
        {
          total: 0,
          amount: 0,
        }
      )
      total = parseFloat(total.toFixed(2))
      return { ...state, total, amount }
    case 'LOADING':
      return { ...state, loading: true }
    case 'DISPLAY_ITEMS':
      return { ...state, cart: action.payload, loading: false }
    default:
      break
  }
  return state
}

export default reducer
