import { createSlice } from "@reduxjs/toolkit";


export const errorsSlice = createSlice({
  name: "errors",
  initialState: [],
  reducers: {
    addErrors: (state, action) => {
      return action.payload.errors
    },
    clearErrors: (state, action) => {
      return []
    }
  }
})

export const { addErrors, clearErrors } = errorsSlice.actions;