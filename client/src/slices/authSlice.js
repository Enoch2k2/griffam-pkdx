import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { headers } from "../Globals";
import { addErrors, clearErrors } from "./errorsSlice";

export const login = createAsyncThunk('auth/login', async (user) => {
  const response = await fetch('/v1/api/login', {
    method: "POST",
    headers,
    body: JSON.stringify(user)
  })
  return response.json()
})

export const signup = createAsyncThunk('auth/signup', async (user) => {
  const response = await fetch('/v1/api/signup', {
    method: "POST",
    headers,
    body: JSON.stringify(user)
  })
  return response.json()
})

export const checkUser = createAsyncThunk('auth/checkUser', async () => {
  const response = await fetch('/v1/api/current-user')
  return response.json()
})

export const logout = createAsyncThunk('auth/logout', async () => {
  const response = await fetch('/v1/api/logout', {
    method: "DELETE"
  })
  return response.json()
})

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loggedIn: false,
    loading: true
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        if(!action.payload.errors) {
          state.currentUser = action.payload
          state.loggedIn = true
        } else {
          state.errors = action.payload.errors
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
      })
      .addCase(signup.pending, (state, action) => {
        state.loading = true
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false
        if(!action.payload.errors) {
          state.currentUser = action.payload
          state.loggedIn = true
        } else {
          state.errors = action.payload.errors
        }
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false
      })
      .addCase(checkUser.pending, (state, action) => {
        state.loading = true
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.loading = false
        if(!action.payload.message) {
          state.currentUser = action.payload
          state.loggedIn = true
        }
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.loading = false
      })
      .addCase(logout.pending, (state, action) => {
        state.loading = true
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false
        state.currentUser = null
        state.loggedIn = false
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false
      })
  }
})

export default authSlice.reducer