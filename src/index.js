import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import GlobalStyles from './Styles/GlobalStyles.js'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './store/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
