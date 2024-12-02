import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  socket: null,
  admin: {name: "Matthew"}
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      const newState = {
        ...state,
        user: action.payload,
        admin: action.payload
      }
      return newState;
    },
    setUser: (state, action) => {
      const newState = {
        ...state,
        user: action.payload
      }
      return newState;
    },
    setSocket: (state, action) => {
      const newState = {
        ...state,
        socket: action.payload
      }
      return newState;
    }
  }
});

// console.log(appSlice);
export const { setAdmin, setUser, setSocket } = appSlice.actions;

export default appSlice.reducer;