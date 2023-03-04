import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import App from './routes/App.js'

function getRandomString(length) {
  var randomChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

var randomString = getRandomString(16);

var myArrayMiniCart = []

if(localStorage["cart-items"]){
  myArrayMiniCart = JSON.parse(localStorage["cart-items"])
}

const initialState = {
  "userID": randomString,
  "miniCart": myArrayMiniCart,
}

const store = createStore(reducer, initialState)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);