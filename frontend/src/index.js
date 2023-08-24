import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {StartSeite,Users,Gruppen,Blog,PreisÜbersicht,Überuns} from "./containers";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
  <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartSeite />
        </Route>
        <Route exact path="/startseite">
          <StartSeite />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/gruppen">
          <Gruppen />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/preisübersicht">
          <PreisÜbersicht />
        </Route>
        <Route path="/uber-uns">
          <Überuns />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
