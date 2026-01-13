// src/store/themeSlice.ts
import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: { mode: 'dark' as 'light' | 'dark' },
  reducers: {
    toggleTheme: s => {
      s.mode = s.mode === 'dark' ? 'light' : 'dark'
    },
    setTheme: (s, a) => {
      s.mode = a.payload
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
