import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { ThemeProvider, CssBaseline } from '@mui/material';
import { store, persistor, type RootState } from './store'; // Import persistor
import { getDesignTokens } from './theme/theme';
import App from './App';
import './index.css';

// Component to handle MUI Theme switching based on Redux state
function ThemeBridge({ children }: { children: React.ReactNode }) {
  const mode = useSelector((s: RootState) => s.theme.mode);
  return (
    <ThemeProvider theme={getDesignTokens(mode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    {/* Wrap with PersistGate */}
    <PersistGate loading={null} persistor={persistor}>
      <ThemeBridge>
        <App />
      </ThemeBridge>
    </PersistGate>
  </Provider>
);