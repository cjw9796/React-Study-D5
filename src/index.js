import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Uredec from './Uredec';
//import Count from './Uredec';
import Ucontext from './Ucontext';
//import Animal from './array-sample/02.Arraysample'
//import App from './array-sample/02.Arraysample';
import App from './array-sample/05.Contact_Infomation'; //과제1번 import

import AppInput from './input-sample/01.Input-sample';
import Inputmain from './input-sample/02.Input-sample';
import Inputname from './input-sample/03.Input_name';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <h2>과제 1번</h2>
   <App/> {/**과제1번 */} <br/>
   <h2>과제 2번(합칠 파일)</h2>
   <AppInput/>
   <Inputmain/>
   <h2>과제 2번(합쳐진 파일)</h2>
    <Inputname/>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
