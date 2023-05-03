import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCKDWjFPe-1YPRrIdG_vNH2YXhJwqZxELc",
  authDomain: "yasite-a4d66.firebaseapp.com",
  databaseURL: "https://yasite-a4d66-default-rtdb.firebaseio.com",
  projectId: "yasite-a4d66",
  storageBucket: "yasite-a4d66.appspot.com",
  messagingSenderId: "111954163236",
  appId: "1:111954163236:web:089b94c856cade1752cab1"
};


const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
