import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const Li = ({ children, estado, casa, edad }) => {
  console.log(casa, edad);
  return(
  <li>{ children } estoy { estado }</li>
  )
}
const X = () =>
  <ul>
    <Li 
    estado={'feliz'}
    casa={false}
    edad={24}
    >
      Chanchito</Li>
    <Li estado={'triste'}
    casa={false}
    edad={12}>
      Chanchito</Li>
    <Li
    estado={'Gilipollas'}
    casa={true}
    edad={20}>
      Yurii</Li>
  </ul>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<X />, document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
