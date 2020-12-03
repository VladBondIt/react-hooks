// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import ReactHooks from './Hooks/React-hooks';
import { createStore } from 'redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <ReactHooks />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Глобал объект Редюсер призван решать проблемы возникающие при 
// вынесении Стейта в глобальное пространство в котором доступен для всех компонентов приложения.
// Action управляет глобал стейтом через редюсер.
// Action всегда объект,он должен всегда сожержать ключ type и значение должно быть всегда строкой.
// Reducer это классическая функция которая принимает на вход 2 аргумента гдобальное сотояние и action - действие
// которое хотим произвестти.
// Редюсер должна быть чистой функцие т.е. не должна содержать сайд эффектов
// и возвращать то что принимает на вход а именно state & action.
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      // Так писать нельзя, функция редюсер станет не чистой
      // return state + Math.floor(Math.random() * 10);
      return state + action.value;
    case 'RND DECR':
      return state - action.valueDecr;
    default:
      return state
  }

}
// Функция action creator 
const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'RND', value });
const rndDecr = (valueDecr) => ({ type: 'RND DECR', valueDecr });

// Импортируем функцию createStore из redux`a создаем с помощью неё хранилище которое
// содержит глобал состаяние и логику - редюсер

const store = createStore(reducer);

document.querySelectorAll('.btn').forEach(element => {
  element.addEventListener('click', () => {
    switch (element.textContent.trim()) {
      case 'Incr':
        store.dispatch(inc());
        break;
      case 'Decr':
        store.dispatch(dec());
        break;
      case 'Rnd':
        const value = Math.floor((Math.random() * 10) + 1);
        // Добавляем в объект Action новое значение value
        store.dispatch(rnd(value));
        break;
      case 'Rnd Decr':
        const valueDecr = Math.floor((Math.random() * 10) + 1);
        store.dispatch(rndDecr(valueDecr));
        break;

      default:
        break;
    }
  })
});

const update = () => {
  document.querySelector('.counter').textContent = store.getState();
}
update();

// Метод subscribe реагирует на кождое изменение стейта в сторе и вызывет коллбек функцию
// которую принимает.
// store.subscribe(() => {
//   console.log(store.getState());
// })
store.subscribe(update);

// Диспатч метод вызова редюсера в сторе с входным аргументом - action
// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });
// console.log(store.getState());

// let state = reducer(undefined, {});

// state = reducer(state, { type: 'INC' });
// console.log(state);
// state = reducer(state, { type: 'INC' });
// console.log(state);