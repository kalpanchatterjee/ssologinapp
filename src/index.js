import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Loggedin from './Loggedin';
import Cookie from './Cookie';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Switch>
          <Route path="/" exact children={<App />} />
          <Route path="/loggedin" exact children={<Loggedin />} />
          <Route path="/cookie" exact children={<Cookie />} />
          <Route path="/cookie/:id" exact children={<Cookie />} />
   </Switch>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
