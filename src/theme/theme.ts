// src/theme/theme.ts
import { createTheme } from '@mui/material/styles'

export const getDesignTokens = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: { main: mode === 'light' ? '#0c3a2d' : '#007050' },
      secondary: { main: mode === 'light' ? '#4caf50' : '#81c784' },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
      },
      text: {
        primary: mode === 'light' ? '#000000' : '#ffffff',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            '--bg-default': mode === 'light' ? '#f5f5f5' : '#121212',
            '--bg-paper': mode === 'light' ? '#ffffff' : '#1e1e1e',
            '--text-primary': mode === 'light' ? '#000000' : '#ffffff',
            '--sidebar-bg': mode === 'light' ? '#ffffff' : '#121212',
            '--topbar-bg': mode === 'light' ? '#ffffff' : '#121212',
            '--divider-color': mode === 'light' ? '#dbdbdb' : '#2f2f2f',
            '--accent': mode === 'light' ? '#0c3a2d' : '#007050',
          },
          body: {
            backgroundColor: 'var(--bg-default)',
            color: 'var(--text-primary)',
          },
        },
      },
    },
  })
