import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Token = {
  id: string
  symbol: string
  price: number
}

type TokenState = {
  entities: Record<string, Token>
}

const initialState: TokenState = {
  entities: {},
}

const tokenSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<Token[]>) {
      action.payload.forEach((token) => {
        state.entities[token.id] = token
      })
    },
    updatePrice(
      state,
      action: PayloadAction<{ id: string; price: number }>
    ) {
      const token = state.entities[action.payload.id]
      if (token) {
        token.price = action.payload.price
      }
    },
  },
})

export const { setTokens, updatePrice } = tokenSlice.actions
export default tokenSlice.reducer
