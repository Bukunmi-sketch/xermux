import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
//import 'react-app-polyfill/ie9';
//import 'core-js/features/array/find';
//import 'core-js/features/array/includes';
//import 'core-js/features/number/is-nan';
import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './App';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LandingPage/>
  </React.StrictMode>
)
