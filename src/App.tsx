import React from 'react';
import Header from "./components/Header/Header";
import Main from './components/Main';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Popup from "./components/Popup";

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Main />
        <Popup />
      </ThemeProvider>
    </div>
  );
}

export default App;
