import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

/* import Routes as a Default Routes */
import Routers from './Routers'

/* import redux for reducers */
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

/* Reducers */
import MovReducers from './Redux/MovReducers'

const options = combineReducers({
  MovReducers
})

/* Create Store */
const StoreData = createStore(options)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ StoreData }>
      {/* <App /> */}
      <Routers />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
