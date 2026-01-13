import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'subadmin' | 'user';
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Call this first when you get the token
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    // Call this once you have the user details
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    // Clears everything on logout
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const { setToken, loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;