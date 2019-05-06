import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider, createGlobalStyle } from 'styled-components';



const theme = {
  white: '#fafafa'
};


const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before{
    margin: 0;
    padding: 0;
    box-sizing:inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
      font-size: 1.8rem;
  }

`;

ReactDOM.render(
  <Fragment>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <App />
      </Fragment>
    </ThemeProvider>
  </Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
