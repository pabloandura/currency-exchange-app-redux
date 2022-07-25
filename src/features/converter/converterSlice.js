import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    baseCurrency: 'CAD',
    convCurrency: 'USD',
    baseAmount: 100,
    rates: [],
    status: 'idle',
    error: null
}

export const converterSlice = createSlice({
    name: 'converter',
    initialState,
    reducers: {
      changeBaseCurrency: {
        reducer(state, action) {
            state.baseCurrency = action.payload
            }
        },
      changeConvCurrency: (state, action) => {
        state.convCurrency = action.payload
      },
      changeBaseAmount: (state, action) => {
        state.baseAmount = action.payload
      },
      swapCurrencies: (state) => {
        let temp = state.baseCurrency
        state.baseCurrency = state.convCurrency
        state.convCurrency = temp
      }
    },

})

export const { 
    changeBaseCurrency,
    changeConvCurrency,
    changeBaseAmount,
    swapCurrencies
    } = converterSlice.actions;

export const selectConversion = (state) => state.converter;

export default converterSlice.reducer;