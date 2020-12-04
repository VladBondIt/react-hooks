import { createStore, bindActionCreators } from 'redux';
import reducer from './React-Redux/reducer/reducer';
import * as actions from './React-Redux/actions/actions';


import './index.css';

const store = createStore(reducer);
const { dispatch } = store;

// Так работает компонент редакса
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

// Импортируем все как actions из action creator модуля, все функции креаторы приходят в виде объекта,
// следовательно мы можем этот объект передать в bindActionCreators как объект.
// Переменные созданные в результате деструктуризации возврощяемого объекта из bindActionCreators
// являются обернутыми в dispatch и их можно использовать в логике
const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
//     // Создаем объект в значениях которого функции, акшон креаторы
//     // bindActionCreators возвращает объект у которого ключи будут такие же
//     // как мы передавали на вход
//     {
//         incDispatch: inc,
//         decDispatch: dec,
//         rndDispatch: rnd
//     }, dispatch)
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// document.querySelectorAll('.btn').forEach(element => {
//     switch (element.textContent.trim()) {
//         case 'Incr':
//             element.addEventListener('click', inc)
//             break;
//         case 'Decr':
//             element.addEventListener('click', dec)
//             break;
//         case 'Rnd':
//             element.addEventListener('click', () => {
//                 const value = Math.floor((Math.random() * 10) + 1);

//                 rnd(value);
//             })
//             break;
//         default:
//             break;
//     }
// });

// const update = () => {
//     document.querySelector('.counter').textContent = store.getState();
// }
// update();

// store.subscribe(update);