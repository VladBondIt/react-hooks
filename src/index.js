// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import ReactHooks from './Hooks/React-hooks';

// ReactDOM.render(
//   <React.StrictMode>
//     <ReactHooks />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Глобал объект Редюсер призван решать проблемы возникающие при 
// вынесении Стейта в глобальное пространство в котором доступен для всех компонентов приложения.

const initialState = 0;

// Action всегда объект,он должен всегда сожержать ключ type и значение должно быть всегда строкой.
const reducer = (state, action) => {
  if (action.type === 'INC') {
    return state + 1;
  }

}

let state = reducer(initialState, { type: 'INC' });

console.log(state);
state = reducer(state, { type: 'INC' });
console.log(state);