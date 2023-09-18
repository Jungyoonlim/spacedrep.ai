import React from 'react';
import '../src/app/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../src/app/components/Layout';
import { SessionProvider as NextAuthProvider } from 'next-auth/react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer'; 

// Initialize Redux store
const store = configureStore({
  reducer: rootReducer,
});

// Create Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#red',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ReduxProvider store={store}>
      <NextAuthProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </NextAuthProvider>
    </ReduxProvider>
  );
};

export default MyApp;
