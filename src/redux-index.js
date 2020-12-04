import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './React-Redux/reducer/reducer';
import { App } from './React-Redux/components/app/app';


import './index.css';

const store = createStore(reducer);

// У компонента Provider есть еще одно свойство, механизм отслеживания изменения в глобал стейте
// store.subscribe, уже встроен в Provider.


ReactDOM.render(
    // Любой компонент который находится внтури Provider будет иметь доступ к store.
    // Любое изменение данных в сторе внутри Provider вызовет перерендер.
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));



