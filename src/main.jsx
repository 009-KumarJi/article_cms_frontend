import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import App from './App';
import store from './store';
import './index.css';

// Define the dark mode theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Custom primary color
    },
    secondary: {
      main: '#f48fb1', // Custom secondary color
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e', // Slightly lighter dark for cards, etc.
    },
    text: {
      primary: '#ffffff', // Default text color in dark mode
      secondary: '#b0bec5', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline /> {/* Ensures proper baseline styling */}
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
