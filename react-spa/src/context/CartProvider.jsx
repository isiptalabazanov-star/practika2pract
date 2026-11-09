import { useMemo, useReducer } from 'react'
import { CartContext } from './cartContext.js'

const initialState = {
  items: [],
  nextKey: 1,
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'cart/add':
      return {
        items: [...state.items, { ...action.payload, key: state.nextKey }],
        nextKey: state.nextKey + 1,
      }
    case 'cart/remove':
      return {
        ...state,
        items: state.items.filter((item) => item.key !== action.payload),
      }
    case 'cart/clear':
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const value = useMemo(() => {
    const total = state.items.reduce((sum, item) => sum + item.price, 0)

    return {
      items: state.items,
      count: state.items.length,
      total,
      addItem: (product) => dispatch({ type: 'cart/add', payload: product }),
      removeItem: (key) => dispatch({ type: 'cart/remove', payload: key }),
      clearCart: () => dispatch({ type: 'cart/clear' }),
    }
  }, [state.items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
