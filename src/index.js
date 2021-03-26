import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reducer, { initialState } from './reducer';
import { StateProvider } from './Components/Pages/Product/stateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={ initialState } reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
